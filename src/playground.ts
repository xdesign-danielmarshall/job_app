import type { Job } from "@/api/types";

const state1: Partial<Job> = {};

const state2: Partial<Job> = {
  organization: "Microsoft",
};

const state3: Partial<Job> = {
  organization: "Microsoft",
  jobType: "Full-time",
};

const invalidState: Partial<Job> = {
  a: 5,
};
