import { createClient } from "@sanity/client"
// ===============================
// CONFIG (SAFE IN LOCAL SCRIPTS)
// ===============================
const SANITY_PROJECT_ID = "6esm8aqm";         // e.g. 6esm8aqm
const SANITY_DATASET = "production";                // or your dataset
const SANITY_WRITE_TOKEN = "skhbm2KksgHh32vLmbCHUPOxYiTz5ddI1XR4g0PjCoNOVZHEFuO16htHXJQEGAT3KyaJoUpKTXX7473RmESXEaQ5UJStqnNhYcMxdUXd0jJmTEd8mKyiCv393huurOenTd3CnjtNsr1voSDktk6yfpD1tNmS2ZyEoexNhFLxdovDMoFaGuF8";
/**
 * ONE-TIME SANITY USER DEDUPE SCRIPT
 * ---------------------------------
 * Deletes duplicate user documents that share the same clerkId.
 *
 * Rules:
 * - One user per clerkId
 * - Canonical ID: user-{clerkId}
 * - If canonical does not exist, newest createdAt is kept
 *
 * RUN WITH:
 *   node cleanup-duplicate-users.mjs
 */




/* ======================================================
   SANITY CLIENT
====================================================== */

const sanity = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2025-01-23",
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
});

/* ======================================================
   SCRIPT
====================================================== */

async function cleanupDuplicateUsers() {
  console.log("🔍 Fetching users…");

  const users = await sanity.fetch(`
    *[_type == "user" && defined(clerkId)]{
      _id,
      clerkId,
      createdAt
    }
  `);

  console.log(`📦 Total user docs found: ${users.length}`);

  // Group by clerkId
  const byClerkId = new Map();

  for (const user of users) {
    if (!byClerkId.has(user.clerkId)) {
      byClerkId.set(user.clerkId, []);
    }
    byClerkId.get(user.clerkId).push(user);
  }

  const deletes = [];

  for (const [clerkId, docs] of byClerkId.entries()) {
    if (docs.length <= 1) continue;

    const canonicalId = `user-${clerkId}`;

    const canonical =
      docs.find(d => d._id === canonicalId) ??
      docs.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime(),
      )[0];

    console.log(
      `⚠️  clerkId=${clerkId} → keeping ${canonical._id}, deleting ${docs.length - 1}`,
    );

    for (const doc of docs) {
      if (doc._id !== canonical._id) {
        deletes.push(doc._id);
      }
    }
  }

  if (deletes.length === 0) {
    console.log("✅ No duplicates found. Nothing to delete.");
    return;
  }

  console.log(`🧹 Deleting ${deletes.length} duplicate documents…`);

  let tx = sanity.transaction();
  deletes.forEach(id => tx.delete(id));
  await tx.commit();

  console.log("🎉 Cleanup complete.");
  console.log("🗑️  Deleted IDs:", deletes);
}

/* ======================================================
   RUN
====================================================== */

cleanupDuplicateUsers()
  .catch(err => {
    console.error("❌ Script failed:", err);
    process.exit(1);
  });
