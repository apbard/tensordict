window.BENCHMARK_DATA = {
  "lastUpdate": 1679668734961,
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
      }
    ]
  }
}