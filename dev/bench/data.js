window.BENCHMARK_DATA = {
  "lastUpdate": 1679926760734,
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
      },
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
          "id": "696ac1ab6c9a4e0609c5b510fae80367f155e066",
          "message": "[DOC] update docstring for set method (#265)",
          "timestamp": "2023-03-06T11:46:25Z",
          "url": "https://github.com/apbard/tensordict/commit/696ac1ab6c9a4e0609c5b510fae80367f155e066"
        },
        "date": 1678108614426,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 889.1677881026421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1246471289 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 171198.3087250152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.841179200001534 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 81101.40377768029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.330242800004498 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 34845.44855337067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.698152599997684 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 43506.64555092373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.984994299997652 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38275.02807721995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.1266954000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 30208.393630546172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.10338219999949 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 31709.87071546046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.535921700003655 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5830.547456944598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.51048119999928 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 24725.875652358936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.443461500001376 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16677.350594390846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.961562500001264 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 23564.46743081799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.43677489999982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14282.329373652694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.01659000000018 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 9135.492394959796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.4631746999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1894.321128339723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.8936000024714 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1903.1179733294548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.4535000005944 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33894.89491362046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.50296800000274 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 127474.72093430243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.844692599996962 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24113.64277625971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.47029999899132 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29091.30617137073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.37453079999955 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20441.025342273027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.921224999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32190.7279514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.06484580000028 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 110798.78411190838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.025369799996952 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31602.04720084435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.64351959999863 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5668.139325594578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.42473879999443 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25440.411428032196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.30754040000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8984.389563835508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.30416740000442 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23632.359661527382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.314860399994814 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 12978.278689729783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.05182049999735 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14947.4596736073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.90100002515464 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1196.8609664124747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 835.5189349999819 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13674.131899436989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.13078500004622 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2554.3643910983624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.4868229000035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2472.4699850191664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 404.4538482000007 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8ab67e42dadd84770452987399efe4f481d9337e",
          "message": "[Refactor] Make `TensorDictBase` available at root (#295)",
          "timestamp": "2023-03-24T08:58:00Z",
          "url": "https://github.com/apbard/tensordict/commit/8ab67e42dadd84770452987399efe4f481d9337e"
        },
        "date": 1679649956415,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 758.5384968195765,
            "unit": "iter/sec",
            "range": "stddev: 0.000057162308845090885",
            "extra": "mean: 1.3183246522000276 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 173834.45518781384,
            "unit": "iter/sec",
            "range": "stddev: 4.886459563280196e-7",
            "extra": "mean: 5.7525995000219154 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 74518.19645291942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014978606697834064",
            "extra": "mean: 13.419541100029164 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 37696.6749565186,
            "unit": "iter/sec",
            "range": "stddev: 0.000002157201050200374",
            "extra": "mean: 26.527538599981426 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 38388.75721672942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021348841469967413",
            "extra": "mean: 26.04929340000126 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 32118.6759896741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053147828536333",
            "extra": "mean: 31.13453370000343 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 26817.892404366074,
            "unit": "iter/sec",
            "range": "stddev: 0.000004554028665935886",
            "extra": "mean: 37.2885379999957 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 26562.321156726975,
            "unit": "iter/sec",
            "range": "stddev: 0.000004060865212852101",
            "extra": "mean: 37.647312299992564 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 4868.077087372242,
            "unit": "iter/sec",
            "range": "stddev: 0.000010427857513510417",
            "extra": "mean: 205.41991879997 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 20229.833403043147,
            "unit": "iter/sec",
            "range": "stddev: 0.000006682576862206951",
            "extra": "mean: 49.43194439997569 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 13421.866542042493,
            "unit": "iter/sec",
            "range": "stddev: 0.000004876501661355662",
            "extra": "mean: 74.50528560000294 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 20635.275826981117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019189113844291926",
            "extra": "mean: 48.4607042999869 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14100.142253088936,
            "unit": "iter/sec",
            "range": "stddev: 0.000003360347458856436",
            "extra": "mean: 70.9212703000162 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 8322.690436321298,
            "unit": "iter/sec",
            "range": "stddev: 0.000010620267616175229",
            "extra": "mean: 120.15345370000432 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1356.4124193852563,
            "unit": "iter/sec",
            "range": "stddev: 0.0008372249386879755",
            "extra": "mean: 737.2388999897339 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1332.2694717444988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005747297710467994",
            "extra": "mean: 750.5989000037516 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 27547.890934019542,
            "unit": "iter/sec",
            "range": "stddev: 0.000003625639409675553",
            "extra": "mean: 36.30041960000199 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 107823.33909291738,
            "unit": "iter/sec",
            "range": "stddev: 7.170039383435616e-7",
            "extra": "mean: 9.274429899988945 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 18439.73985444849,
            "unit": "iter/sec",
            "range": "stddev: 0.00005934844733036295",
            "extra": "mean: 54.230699993240705 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 24285.869573021664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027501812646856267",
            "extra": "mean: 41.17620730002045 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 16997.712096043917,
            "unit": "iter/sec",
            "range": "stddev: 0.000005113761480671354",
            "extra": "mean: 58.831447100033074 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 26532.07722167095,
            "unit": "iter/sec",
            "range": "stddev: 0.000003229628001341678",
            "extra": "mean: 37.690226499989876 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 98480.44282777495,
            "unit": "iter/sec",
            "range": "stddev: 7.019227878767566e-7",
            "extra": "mean: 10.154300400017746 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 24484.135426117187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021403908153637457",
            "extra": "mean: 40.842773599973725 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4470.903671644685,
            "unit": "iter/sec",
            "range": "stddev: 0.000023434394371392337",
            "extra": "mean: 223.66842889999816 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 20615.590861364646,
            "unit": "iter/sec",
            "range": "stddev: 0.00000807299762945276",
            "extra": "mean: 48.50697740000669 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7548.981378838079,
            "unit": "iter/sec",
            "range": "stddev: 0.000005860633690376424",
            "extra": "mean: 132.46820330002151 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 18860.93761852157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044068203799467815",
            "extra": "mean: 53.019633499980046 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 10812.677558216168,
            "unit": "iter/sec",
            "range": "stddev: 0.000008592272305119898",
            "extra": "mean: 92.48403040004973 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14367.6096710762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.6009999501257 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 901.6411637296399,
            "unit": "iter/sec",
            "range": "stddev: 0.00009612279584402635",
            "extra": "mean: 1.1090886710002223 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10981.019823358878,
            "unit": "iter/sec",
            "range": "stddev: 0.000039373226058413095",
            "extra": "mean: 91.06622299987066 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 4566.027198164954,
            "unit": "iter/sec",
            "range": "stddev: 0.000020972969612103934",
            "extra": "mean: 219.00876989998892 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2081.068489154386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001826898547030948",
            "extra": "mean: 480.52238799999145 usec\nrounds: 100"
          }
        ]
      },
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
          "id": "667704ba287606091af3655c005080ac56350cce",
          "message": "[BugFix] deprecate CLASSES_DICT and _get_typed_output (#299)",
          "timestamp": "2023-03-24T13:26:12Z",
          "url": "https://github.com/apbard/tensordict/commit/667704ba287606091af3655c005080ac56350cce"
        },
        "date": 1679668734153,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 894.4092603593119,
            "unit": "iter/sec",
            "range": "stddev: 0.00003658841337242573",
            "extra": "mean: 1.1180564024999795 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 189364.41934520187,
            "unit": "iter/sec",
            "range": "stddev: 5.855223643614624e-8",
            "extra": "mean: 5.280823100019916 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 81562.65299656746,
            "unit": "iter/sec",
            "range": "stddev: 1.316638192029701e-7",
            "extra": "mean: 12.260513399951378 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 41816.6478238672,
            "unit": "iter/sec",
            "range": "stddev: 1.4899057885151438e-7",
            "extra": "mean: 23.913920700005065 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 41636.94500094154,
            "unit": "iter/sec",
            "range": "stddev: 1.3799370477858741e-7",
            "extra": "mean: 24.01713189998418 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 36993.668811020194,
            "unit": "iter/sec",
            "range": "stddev: 2.08675475512451e-7",
            "extra": "mean: 27.031652500011205 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 30040.80556775979,
            "unit": "iter/sec",
            "range": "stddev: 2.3385752818737405e-7",
            "extra": "mean: 33.2880553999928 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 30545.953944044755,
            "unit": "iter/sec",
            "range": "stddev: 2.1120546968567772e-7",
            "extra": "mean: 32.73755999998684 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5809.437849484239,
            "unit": "iter/sec",
            "range": "stddev: 8.020149626200826e-7",
            "extra": "mean: 172.1336945000246 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 23855.14268044693,
            "unit": "iter/sec",
            "range": "stddev: 2.1370335590822677e-7",
            "extra": "mean: 41.91968220000035 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16038.076214864486,
            "unit": "iter/sec",
            "range": "stddev: 1.700415993955478e-7",
            "extra": "mean: 62.35161789998073 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 23729.209024701104,
            "unit": "iter/sec",
            "range": "stddev: 1.716092570449052e-7",
            "extra": "mean: 42.14215479997847 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 16345.564481682819,
            "unit": "iter/sec",
            "range": "stddev: 2.0825386477384056e-7",
            "extra": "mean: 61.178676399987346 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 9916.125857526398,
            "unit": "iter/sec",
            "range": "stddev: 4.4642225598738845e-7",
            "extra": "mean: 100.8458357999757 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2023.8613250164606,
            "unit": "iter/sec",
            "range": "stddev: 0.0002772713654834693",
            "extra": "mean: 494.1050000013547 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2076.9518986243143,
            "unit": "iter/sec",
            "range": "stddev: 0.00008366081472865751",
            "extra": "mean: 481.47480000011456 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 32722.997295186804,
            "unit": "iter/sec",
            "range": "stddev: 3.894059154370092e-7",
            "extra": "mean: 30.559547799953183 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 122824.28750085704,
            "unit": "iter/sec",
            "range": "stddev: 6.427586021344052e-8",
            "extra": "mean: 8.14171219998343 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 23747.102843988334,
            "unit": "iter/sec",
            "range": "stddev: 0.000045408824800158615",
            "extra": "mean: 42.11040001678157 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28621.648770562966,
            "unit": "iter/sec",
            "range": "stddev: 3.072561279021451e-7",
            "extra": "mean: 34.938588200009235 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 19891.909195496635,
            "unit": "iter/sec",
            "range": "stddev: 2.992519371160296e-7",
            "extra": "mean: 50.27169539997658 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 30796.214601974207,
            "unit": "iter/sec",
            "range": "stddev: 1.9048818018210967e-7",
            "extra": "mean: 32.47152330000631 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111906.6893377856,
            "unit": "iter/sec",
            "range": "stddev: 1.3416054909537417e-7",
            "extra": "mean: 8.936016299986704 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 27176.996007815436,
            "unit": "iter/sec",
            "range": "stddev: 2.1383376070162856e-7",
            "extra": "mean: 36.795825399997284 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5363.681483704953,
            "unit": "iter/sec",
            "range": "stddev: 4.597989134002761e-7",
            "extra": "mean: 186.43910960000767 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23723.218120659818,
            "unit": "iter/sec",
            "range": "stddev: 2.2182396877270631e-7",
            "extra": "mean: 42.15279710003301 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8774.542159701741,
            "unit": "iter/sec",
            "range": "stddev: 5.337864889923238e-7",
            "extra": "mean: 113.96606019999922 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 21930.160968155396,
            "unit": "iter/sec",
            "range": "stddev: 2.411429781584209e-7",
            "extra": "mean: 45.59930049998684 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 12598.595601286976,
            "unit": "iter/sec",
            "range": "stddev: 3.8333161367090346e-7",
            "extra": "mean: 79.37392640000667 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15600.380644212253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.10100002085528 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1107.6977846955522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064814611550161795",
            "extra": "mean: 902.7733139999441 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 2787.564762794263,
            "unit": "iter/sec",
            "range": "stddev: 0.0006192997237152361",
            "extra": "mean: 358.73606000012614 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 5670.150641964008,
            "unit": "iter/sec",
            "range": "stddev: 7.202943449644274e-7",
            "extra": "mean: 176.36215740004104 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2434.252196149118,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010643492509451825",
            "extra": "mean: 410.80377850000787 usec\nrounds: 100"
          }
        ]
      },
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
          "id": "ce6679a59b268d6bf1aa2f4786774710938b48e4",
          "message": "[Test] consolidate test_tensorclass and test_tensorclass_nofuture (#302)",
          "timestamp": "2023-03-24T19:14:54Z",
          "url": "https://github.com/apbard/tensordict/commit/ce6679a59b268d6bf1aa2f4786774710938b48e4"
        },
        "date": 1679926586739,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 668.2860060366685,
            "unit": "iter/sec",
            "range": "stddev: 0.00011350731965198428",
            "extra": "mean: 1.4963653151000302 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 161648.26136843525,
            "unit": "iter/sec",
            "range": "stddev: 6.087093417998354e-7",
            "extra": "mean: 6.186271300009594 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 57949.292074714576,
            "unit": "iter/sec",
            "range": "stddev: 0.000004518849472646503",
            "extra": "mean: 17.256466199978604 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 33024.57829470236,
            "unit": "iter/sec",
            "range": "stddev: 0.000003623001384367202",
            "extra": "mean: 30.280477500008374 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 30849.21547608672,
            "unit": "iter/sec",
            "range": "stddev: 0.000005822999509685136",
            "extra": "mean: 32.415735199981555 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 22999.900162032303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066595311728463015",
            "extra": "mean: 43.47844960000202 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 18569.61160125833,
            "unit": "iter/sec",
            "range": "stddev: 0.000012900574253041107",
            "extra": "mean: 53.8514224999858 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 22661.56002311423,
            "unit": "iter/sec",
            "range": "stddev: 0.000006029739655224615",
            "extra": "mean: 44.1275886999847 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 4911.32839448882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011101206260009985",
            "extra": "mean: 203.6109011000235 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 20225.936616153653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045936474191743115",
            "extra": "mean: 49.44146809999097 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 13865.417913850724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022854019545659436",
            "extra": "mean: 72.12187950000839 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 20906.537224998217,
            "unit": "iter/sec",
            "range": "stddev: 3.092936444747668e-7",
            "extra": "mean: 47.83192879996818 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14346.25793305897,
            "unit": "iter/sec",
            "range": "stddev: 2.6750385572467797e-7",
            "extra": "mean: 69.70458809998377 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 8710.822222306124,
            "unit": "iter/sec",
            "range": "stddev: 6.032604326399334e-7",
            "extra": "mean: 114.79972549999502 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1714.8405386925708,
            "unit": "iter/sec",
            "range": "stddev: 0.0003164060104531723",
            "extra": "mean: 583.1446000001961 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1780.7748614163577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000582048466601364",
            "extra": "mean: 561.5533000081996 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 28162.91122132817,
            "unit": "iter/sec",
            "range": "stddev: 4.806166476542799e-7",
            "extra": "mean: 35.50769279997894 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 109114.79888313827,
            "unit": "iter/sec",
            "range": "stddev: 1.1374309490347427e-7",
            "extra": "mean: 9.164659700019229 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 19480.608029527557,
            "unit": "iter/sec",
            "range": "stddev: 0.00006032977286684986",
            "extra": "mean: 51.33309999791891 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 25271.95613206641,
            "unit": "iter/sec",
            "range": "stddev: 3.882716178820776e-7",
            "extra": "mean: 39.56955270000435 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17520.78023230922,
            "unit": "iter/sec",
            "range": "stddev: 3.392803532580358e-7",
            "extra": "mean: 57.075083799975346 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 26547.401509650794,
            "unit": "iter/sec",
            "range": "stddev: 3.0086064961818834e-7",
            "extra": "mean: 37.668470100038576 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 98105.375258051,
            "unit": "iter/sec",
            "range": "stddev: 1.503341995607774e-7",
            "extra": "mean: 10.19312140002171 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 23629.822385938958,
            "unit": "iter/sec",
            "range": "stddev: 2.272743778860232e-7",
            "extra": "mean: 42.31940400005101 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4704.637523564476,
            "unit": "iter/sec",
            "range": "stddev: 7.026104475361644e-7",
            "extra": "mean: 212.55622669997933 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 20861.9078015295,
            "unit": "iter/sec",
            "range": "stddev: 3.3941761284542043e-7",
            "extra": "mean: 47.934254599988435 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7631.093636119342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011573950928325725",
            "extra": "mean: 131.0428161000175 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 19450.99216711162,
            "unit": "iter/sec",
            "range": "stddev: 3.220190574749446e-7",
            "extra": "mean: 51.41125919997194 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 10665.582326773487,
            "unit": "iter/sec",
            "range": "stddev: 0.000011602961289999526",
            "extra": "mean: 93.75953130001449 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12546.264355786363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.70499996190483 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 934.174836780376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069248785388160996",
            "extra": "mean: 1.0704634300004159 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 2486.7168537831503,
            "unit": "iter/sec",
            "range": "stddev: 0.0006683224250011846",
            "extra": "mean: 402.136656000323 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 4741.048323660439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020042441937017625",
            "extra": "mean: 210.923815100017 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3005.5006489542207,
            "unit": "iter/sec",
            "range": "stddev: 7.693766101378369e-7",
            "extra": "mean: 332.72326869999347 usec\nrounds: 100"
          }
        ]
      }
    ],
    "GPU Benchmark Results": [
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
        "date": 1675959683591,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1036.595871601121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 964.6961051999995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 208645.57578423762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.7928167000009125 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 101397.24490909933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.862200899999607 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 40856.74502451018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.47576280000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 55939.76133514193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.876372299997456 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 40629.29694175007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.612781299998687 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 34190.17700623966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.248166799999353 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 35461.18731559211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.199845399996093 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5579.574224599051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.2251451000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 33640.86545391661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.725751300003367 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21894.177671261637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.67424339999775 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26471.651142159408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.776260900000125 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15681.070386854444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.77115689999755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1596.443124722018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 626.3924999984738 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1655.022754080162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 604.2213000000629 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 29872.846914184876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.47521590000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 109612.66818157038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.123033100001976 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 20135.876896137128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.66260000287548 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 31591.2232189551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.654361500000054 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 21619.83196698822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.253828500005056 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 34450.97427062661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.02675529999783 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 120048.42273177346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.329972000001362 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 33045.922808586576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.260919199997716 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7261.1173270106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.7198515000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 27365.628531389688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.54219009999906 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9252.066899486066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.08395690000339 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 24301.514804304417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.149698200001694 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15925.624758795362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.7918851000004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11599.313322649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.21199998515294 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1238.442369717205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 807.4659139999767 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15296.401507769857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.37485300003709 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2543.960354872999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.08788679999793 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2532.200209291766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.91348130000006 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "696ac1ab6c9a4e0609c5b510fae80367f155e066",
          "message": "[DOC] update docstring for set method (#265)",
          "timestamp": "2023-03-06T11:46:25Z",
          "url": "https://github.com/apbard/tensordict/commit/696ac1ab6c9a4e0609c5b510fae80367f155e066"
        },
        "date": 1678108822341,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1077.285544975285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 928.2589975000008 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 219993.95720588675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.545579400001998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 101752.06576785294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.827810300004103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 47214.09948231758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.180113799999845 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 54154.90453729327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.465548200003923 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 43910.884072710855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.773397100002057 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 37765.72716225569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.479034699997328 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 38949.25337222059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.674433099999305 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7032.448005537565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.19799410000178 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 33355.868558126895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.979732000003878 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21590.132331923513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.31745579999915 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 30202.81325010167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.10949849999929 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17415.65030629381,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.419618700004094 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 10846.00337145588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.19986070000346 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2198.4743028117205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.8608999982662 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2280.9131590392212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.4208999965722 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37719.345348471434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.511594800001603 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 132215.57230777538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.563405600001261 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25087.80732315043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.860000003955065 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35286.836229158085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.339179900001454 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 24939.391915674136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.09720860000243 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38900.88384674812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.706356800003505 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 140565.40861279663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.114125800001148 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 36872.218357535945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.12068990000489 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7398.543481002617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.16173859999867 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30935.892990566284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.324911400002065 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10582.06558635526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.49950880000415 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27576.469397969373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.26280020000081 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 16960.70013444472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.959830200001306 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16366.612116071281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.099999982161535 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1491.9775301439906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 670.2513810000141 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 16989.457582839605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.86003100005155 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2894.221120843747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 345.51610199999914 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3010.7503743618067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 332.1431124000014 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8ab67e42dadd84770452987399efe4f481d9337e",
          "message": "[Refactor] Make `TensorDictBase` available at root (#295)",
          "timestamp": "2023-03-24T08:58:00Z",
          "url": "https://github.com/apbard/tensordict/commit/8ab67e42dadd84770452987399efe4f481d9337e"
        },
        "date": 1679650127435,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1012.9057502158876,
            "unit": "iter/sec",
            "range": "stddev: 0.000011508003788880644",
            "extra": "mean: 987.2586860000183 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 260251.46120577242,
            "unit": "iter/sec",
            "range": "stddev: 4.984695096960411e-8",
            "extra": "mean: 3.8424376000307343 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 102240.33730189307,
            "unit": "iter/sec",
            "range": "stddev: 8.814498955367066e-8",
            "extra": "mean: 9.780875399962952 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 54740.38395810019,
            "unit": "iter/sec",
            "range": "stddev: 2.0095011633293173e-7",
            "extra": "mean: 18.26804869994021 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 53257.65548285588,
            "unit": "iter/sec",
            "range": "stddev: 1.5994125810805107e-7",
            "extra": "mean: 18.776643300077467 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45668.32719743954,
            "unit": "iter/sec",
            "range": "stddev: 2.2188132288373992e-7",
            "extra": "mean: 21.897014000023773 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 37199.88656721077,
            "unit": "iter/sec",
            "range": "stddev: 2.0445920148596247e-7",
            "extra": "mean: 26.881802399941535 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 38694.37142382698,
            "unit": "iter/sec",
            "range": "stddev: 2.671964075947667e-7",
            "extra": "mean: 25.843552000026193 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6044.109798473711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010126247605723494",
            "extra": "mean: 165.45033649993002 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 30329.99458729646,
            "unit": "iter/sec",
            "range": "stddev: 3.594579995658788e-7",
            "extra": "mean: 32.97066200001382 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 20587.842865599774,
            "unit": "iter/sec",
            "range": "stddev: 2.954176263796474e-7",
            "extra": "mean: 48.57235440002796 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 30333.01200371739,
            "unit": "iter/sec",
            "range": "stddev: 2.508508615260891e-7",
            "extra": "mean: 32.96738219987674 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 20551.066363471466,
            "unit": "iter/sec",
            "range": "stddev: 3.010101488394727e-7",
            "extra": "mean: 48.659275500051535 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 12496.927052502064,
            "unit": "iter/sec",
            "range": "stddev: 5.474201350921178e-7",
            "extra": "mean: 80.01967169999489 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2032.6244352738993,
            "unit": "iter/sec",
            "range": "stddev: 0.00026380354402181274",
            "extra": "mean: 491.97479999065763 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2150.470576658518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000487698797288006",
            "extra": "mean: 465.01450001414923 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33531.80686862419,
            "unit": "iter/sec",
            "range": "stddev: 8.895840483631822e-7",
            "extra": "mean: 29.82243110005811 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 121396.34347434553,
            "unit": "iter/sec",
            "range": "stddev: 9.899834438794052e-8",
            "extra": "mean: 8.237480399986907 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 21454.485381621205,
            "unit": "iter/sec",
            "range": "stddev: 0.000057820972686056766",
            "extra": "mean: 46.61030000079336 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35618.174776404325,
            "unit": "iter/sec",
            "range": "stddev: 3.0428694661349476e-7",
            "extra": "mean: 28.075554299948635 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25062.983465428104,
            "unit": "iter/sec",
            "range": "stddev: 4.3493025486257617e-7",
            "extra": "mean: 39.89947969998866 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38292.07379615195,
            "unit": "iter/sec",
            "range": "stddev: 1.9794091006188749e-7",
            "extra": "mean: 26.115065099986623 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 145515.7763753904,
            "unit": "iter/sec",
            "range": "stddev: 1.0321360934091545e-7",
            "extra": "mean: 6.872107100059566 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 32583.20326222625,
            "unit": "iter/sec",
            "range": "stddev: 2.5675868378646916e-7",
            "extra": "mean: 30.690659600043087 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6813.564714454437,
            "unit": "iter/sec",
            "range": "stddev: 0.000004226744164276028",
            "extra": "mean: 146.76605299991934 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 29423.50658886836,
            "unit": "iter/sec",
            "range": "stddev: 2.72271039269401e-7",
            "extra": "mean: 33.986431800019545 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10393.816305424001,
            "unit": "iter/sec",
            "range": "stddev: 5.161977487718312e-7",
            "extra": "mean: 96.21105189997934 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 26210.45242440664,
            "unit": "iter/sec",
            "range": "stddev: 3.50236965225827e-7",
            "extra": "mean: 38.152717999969354 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15168.399050546723,
            "unit": "iter/sec",
            "range": "stddev: 5.305136674312243e-7",
            "extra": "mean: 65.92653559994233 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13088.833915586096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.40100000116945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1320.6450982039285,
            "unit": "iter/sec",
            "range": "stddev: 0.000005223823393582194",
            "extra": "mean: 757.20570300075 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17699.507879631583,
            "unit": "iter/sec",
            "range": "stddev: 0.00000516434990284239",
            "extra": "mean: 56.49874599907889 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 6382.832688264577,
            "unit": "iter/sec",
            "range": "stddev: 0.000002715799573060057",
            "extra": "mean: 156.67025110004715 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2857.3376834878263,
            "unit": "iter/sec",
            "range": "stddev: 8.300751630239292e-7",
            "extra": "mean: 349.97613540004977 usec\nrounds: 100"
          }
        ]
      },
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
          "id": "667704ba287606091af3655c005080ac56350cce",
          "message": "[BugFix] deprecate CLASSES_DICT and _get_typed_output (#299)",
          "timestamp": "2023-03-24T13:26:12Z",
          "url": "https://github.com/apbard/tensordict/commit/667704ba287606091af3655c005080ac56350cce"
        },
        "date": 1679668986525,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1083.3019375370347,
            "unit": "iter/sec",
            "range": "stddev: 0.000009507803347867121",
            "extra": "mean: 923.1036752999557 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 245648.3879395023,
            "unit": "iter/sec",
            "range": "stddev: 5.151632456780436e-8",
            "extra": "mean: 4.070859199964616 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 98342.84439769728,
            "unit": "iter/sec",
            "range": "stddev: 9.55003429484154e-8",
            "extra": "mean: 10.168507999992471 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 54255.219798464255,
            "unit": "iter/sec",
            "range": "stddev: 1.1331973695577654e-7",
            "extra": "mean: 18.43140629997606 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50932.53395049519,
            "unit": "iter/sec",
            "range": "stddev: 9.221309633166602e-8",
            "extra": "mean: 19.63381600004368 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 43689.82352137119,
            "unit": "iter/sec",
            "range": "stddev: 1.512456735693264e-7",
            "extra": "mean: 22.8886252999132 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 34490.306051003936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028653931397807275",
            "extra": "mean: 28.993654000089464 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 37161.01098690347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026319442065890307",
            "extra": "mean: 26.909924499966564 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6942.483164018949,
            "unit": "iter/sec",
            "range": "stddev: 8.912188313327761e-7",
            "extra": "mean: 144.0406806000965 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32162.341502868538,
            "unit": "iter/sec",
            "range": "stddev: 3.4683819673813275e-7",
            "extra": "mean: 31.09226359998729 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 20707.809451904384,
            "unit": "iter/sec",
            "range": "stddev: 4.367960801681393e-7",
            "extra": "mean: 48.29096009998466 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 30262.393227861452,
            "unit": "iter/sec",
            "range": "stddev: 3.1318626336904427e-7",
            "extra": "mean: 33.044313199900444 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 20233.68289090579,
            "unit": "iter/sec",
            "range": "stddev: 3.0920216265585226e-7",
            "extra": "mean: 49.42253990001291 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 11838.387616906537,
            "unit": "iter/sec",
            "range": "stddev: 3.4522118099424765e-7",
            "extra": "mean: 84.47096280002597 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2355.1583501989458,
            "unit": "iter/sec",
            "range": "stddev: 0.00023974818994734043",
            "extra": "mean: 424.59990000907055 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2562.7232932738543,
            "unit": "iter/sec",
            "range": "stddev: 0.00005302735123192185",
            "extra": "mean: 390.2099000015369 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35593.84592799441,
            "unit": "iter/sec",
            "range": "stddev: 4.5562754274213145e-7",
            "extra": "mean: 28.094744299983176 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 127204.80268247076,
            "unit": "iter/sec",
            "range": "stddev: 7.141986756145435e-8",
            "extra": "mean: 7.861338400061868 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25227.043390538154,
            "unit": "iter/sec",
            "range": "stddev: 0.00004362087168349039",
            "extra": "mean: 39.63999999996304 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 34264.95861002535,
            "unit": "iter/sec",
            "range": "stddev: 2.623120287578395e-7",
            "extra": "mean: 29.184334100068554 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 24482.44616808824,
            "unit": "iter/sec",
            "range": "stddev: 2.956958685399596e-7",
            "extra": "mean: 40.845591700042405 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 37239.08736006865,
            "unit": "iter/sec",
            "range": "stddev: 2.659918710761154e-7",
            "extra": "mean: 26.853504500013514 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 139440.67500679352,
            "unit": "iter/sec",
            "range": "stddev: 4.312926107413958e-7",
            "extra": "mean: 7.171508599992649 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31438.53947568182,
            "unit": "iter/sec",
            "range": "stddev: 2.3650925525474335e-7",
            "extra": "mean: 31.808093399934023 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6873.947449567246,
            "unit": "iter/sec",
            "range": "stddev: 7.883216122130006e-7",
            "extra": "mean: 145.47681769998917 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 28360.489570353537,
            "unit": "iter/sec",
            "range": "stddev: 3.2845149299434957e-7",
            "extra": "mean: 35.260322199985694 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9934.242497126083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015056335875622296",
            "extra": "mean: 100.6619277000027 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 26298.30006611355,
            "unit": "iter/sec",
            "range": "stddev: 2.0348953652494498e-7",
            "extra": "mean: 38.025271499907376 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 16710.610922260432,
            "unit": "iter/sec",
            "range": "stddev: 2.841481684785689e-7",
            "extra": "mean: 59.84221670004217 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15037.593984366806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.5000000026339 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1383.7478045446207,
            "unit": "iter/sec",
            "range": "stddev: 0.000006294337595256896",
            "extra": "mean: 722.6750400005812 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 3444.681087907515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005023011675338895",
            "extra": "mean: 290.3026360003196 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 6449.943591241877,
            "unit": "iter/sec",
            "range": "stddev: 0.000004393945430126295",
            "extra": "mean: 155.04011560005893 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2975.8888787097694,
            "unit": "iter/sec",
            "range": "stddev: 7.586856433336603e-7",
            "extra": "mean: 336.0340525999618 usec\nrounds: 100"
          }
        ]
      },
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
          "id": "ce6679a59b268d6bf1aa2f4786774710938b48e4",
          "message": "[Test] consolidate test_tensorclass and test_tensorclass_nofuture (#302)",
          "timestamp": "2023-03-24T19:14:54Z",
          "url": "https://github.com/apbard/tensordict/commit/ce6679a59b268d6bf1aa2f4786774710938b48e4"
        },
        "date": 1679926759269,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1080.2940524112485,
            "unit": "iter/sec",
            "range": "stddev: 0.000009972040400867292",
            "extra": "mean: 925.673892000026 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 243090.25669042498,
            "unit": "iter/sec",
            "range": "stddev: 4.7137409072586676e-8",
            "extra": "mean: 4.1136983999876975 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 97665.68179640367,
            "unit": "iter/sec",
            "range": "stddev: 8.417603563854907e-8",
            "extra": "mean: 10.23901109997496 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 54141.30085816189,
            "unit": "iter/sec",
            "range": "stddev: 1.2415572181052893e-7",
            "extra": "mean: 18.470187899987422 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50843.63677089958,
            "unit": "iter/sec",
            "range": "stddev: 9.925271884749189e-8",
            "extra": "mean: 19.668144600001373 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 43554.94560042197,
            "unit": "iter/sec",
            "range": "stddev: 1.4922010313861666e-7",
            "extra": "mean: 22.959505200032027 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 36412.836726607,
            "unit": "iter/sec",
            "range": "stddev: 1.3779623011976414e-7",
            "extra": "mean: 27.462842499971885 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 37457.62428329255,
            "unit": "iter/sec",
            "range": "stddev: 1.4713520255983522e-7",
            "extra": "mean: 26.696834599999875 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7069.491925015889,
            "unit": "iter/sec",
            "range": "stddev: 8.976286171613254e-7",
            "extra": "mean: 141.45288100003768 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 31411.868992897867,
            "unit": "iter/sec",
            "range": "stddev: 3.7218292232868023e-7",
            "extra": "mean: 31.835100300020258 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 20865.97341041677,
            "unit": "iter/sec",
            "range": "stddev: 5.293968314305464e-7",
            "extra": "mean: 47.92491490000543 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 29978.952467001625,
            "unit": "iter/sec",
            "range": "stddev: 2.948342858614196e-7",
            "extra": "mean: 33.35673589998578 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 20258.805880478343,
            "unit": "iter/sec",
            "range": "stddev: 3.884379037573698e-7",
            "extra": "mean: 49.36125089996608 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 11864.149480442538,
            "unit": "iter/sec",
            "range": "stddev: 2.5271017134158084e-7",
            "extra": "mean: 84.28754220000769 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2190.4907728466264,
            "unit": "iter/sec",
            "range": "stddev: 0.0003058189579054453",
            "extra": "mean: 456.518700008246 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2387.0974518547355,
            "unit": "iter/sec",
            "range": "stddev: 0.00007163620754740571",
            "extra": "mean: 418.91879999411685 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34747.37932488988,
            "unit": "iter/sec",
            "range": "stddev: 5.981341581490272e-7",
            "extra": "mean: 28.77914879996979 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 122207.60361269698,
            "unit": "iter/sec",
            "range": "stddev: 7.920447841107458e-8",
            "extra": "mean: 8.182796900013045 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 23540.545059298176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000510458897749339",
            "extra": "mean: 42.47989999726087 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 33809.235856263986,
            "unit": "iter/sec",
            "range": "stddev: 2.8091312095797307e-7",
            "extra": "mean: 29.57771669999829 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 24225.426215171912,
            "unit": "iter/sec",
            "range": "stddev: 2.430773490008231e-7",
            "extra": "mean: 41.27894350002066 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 35819.76058127948,
            "unit": "iter/sec",
            "range": "stddev: 1.5921098444490808e-7",
            "extra": "mean: 27.91755120001085 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 143437.44362447353,
            "unit": "iter/sec",
            "range": "stddev: 1.2040495887135717e-7",
            "extra": "mean: 6.9716803000062555 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30651.709286429617,
            "unit": "iter/sec",
            "range": "stddev: 3.088191252706671e-7",
            "extra": "mean: 32.62460800000895 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6715.385904975939,
            "unit": "iter/sec",
            "range": "stddev: 0.000004617842107452432",
            "extra": "mean: 148.91176980000864 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 27434.076654515316,
            "unit": "iter/sec",
            "range": "stddev: 2.1329935358281666e-7",
            "extra": "mean: 36.45101720000525 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9902.520087385745,
            "unit": "iter/sec",
            "range": "stddev: 4.784004191505914e-7",
            "extra": "mean: 100.9843950000004 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 25803.27484685888,
            "unit": "iter/sec",
            "range": "stddev: 2.0554526837721524e-7",
            "extra": "mean: 38.754770700035124 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 16572.142040969065,
            "unit": "iter/sec",
            "range": "stddev: 6.006767567966967e-7",
            "extra": "mean: 60.34222960000193 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12269.938647053941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.50000002160596 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1357.9780622480625,
            "unit": "iter/sec",
            "range": "stddev: 0.000006195897352217747",
            "extra": "mean: 736.388920999616 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 3437.9019691752806,
            "unit": "iter/sec",
            "range": "stddev: 0.0005460369262525465",
            "extra": "mean: 290.87507699932763 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 6493.19046486819,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024250168027241173",
            "extra": "mean: 154.0074952999703 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 4234.555505152775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031749796950228396",
            "extra": "mean: 236.152294800047 usec\nrounds: 100"
          }
        ]
      }
    ]
  }
}