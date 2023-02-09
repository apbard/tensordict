window.BENCHMARK_DATA = {
  "lastUpdate": 1675959418065,
  "repoUrl": "https://github.com/apbard/tensordict",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "741419d304e35c4d434aac4b48a080eaf6af0de6",
          "message": "[Test] use temp_path instead of tmpdir (#212)",
          "timestamp": "2023-02-09T15:21:26Z",
          "url": "https://github.com/apbard/tensordict/commit/741419d304e35c4d434aac4b48a080eaf6af0de6"
        },
        "date": 1675959417065,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1127.9497108764906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 886.564347999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 173879.725098895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.751101800001379 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 92130.36686451075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.854184499999064 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39263.335488591336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.469053699998767 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50301.730908727404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.880031599996073 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38280.86338720093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.122712800003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33497.529850275874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.852947500000937 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34535.77854335555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.955478699998594 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7170.856206778154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.45336109999857 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32086.437783092184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.165815499997503 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21340.54782705697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.85915320000049 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26739.24289015978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.398216699995146 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14925.96694275912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.99733450000167 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2273.2986973739235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.88939999621834 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2352.446332468479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.0893999994787 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35510.46843459914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.16070990000412 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131300.12119523413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.616139200001726 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24588.208970538257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.66989999955695 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29452.420827588314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.95306640000513 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20918.426879074228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.80474199999958 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32140.057732352347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.11382089999779 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112812.37181690757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.864276000002747 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31135.924297859387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.11724149999782 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6747.228603177622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.20899939999777 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25855.930856689574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.675846000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9062.427200389586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.3457139999989 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23289.08549928059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.938568800002486 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15259.02562210166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.53498399999853 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15360.983109510713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.0999999720625 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1264.7803336473487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 790.6511299999579 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13477.079867186216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.20005000005858 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2637.6690969466213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.12261290000515 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2552.782182784271,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.7294654999978 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}