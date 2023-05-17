window.BENCHMARK_DATA = {
  "lastUpdate": 1684341035885,
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
      },
      {
        "commit": {
          "author": {
            "email": "apbard@users.noreply.github.com",
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard"
          },
          "committer": {
            "email": "apbard@users.noreply.github.com",
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard"
          },
          "distinct": true,
          "id": "05ee7207bd364926145bef934e7f7904b1c52b02",
          "message": "[CI] run benchmarks and comment on PR",
          "timestamp": "2023-04-07T17:12:53+02:00",
          "tree_id": "a7168e87d13568e9faaca55a70b4160dee83050c",
          "url": "https://github.com/apbard/tensordict/commit/05ee7207bd364926145bef934e7f7904b1c52b02"
        },
        "date": 1680880773021,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 955.4824184638517,
            "unit": "iter/sec",
            "range": "stddev: 0.000005525025272124897",
            "extra": "mean: 1.0465917327999819 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 261211.68893045254,
            "unit": "iter/sec",
            "range": "stddev: 4.9689748722777855e-8",
            "extra": "mean: 3.828312600001027 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 92490.27265953911,
            "unit": "iter/sec",
            "range": "stddev: 9.729780652504712e-8",
            "extra": "mean: 10.811947799970767 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 46880.74113269779,
            "unit": "iter/sec",
            "range": "stddev: 2.0225691565216184e-7",
            "extra": "mean: 21.330720800028757 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 48390.71920978846,
            "unit": "iter/sec",
            "range": "stddev: 1.639387420503833e-7",
            "extra": "mean: 20.665119599993886 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 39272.688811207954,
            "unit": "iter/sec",
            "range": "stddev: 1.5808667330630203e-7",
            "extra": "mean: 25.46298789999355 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 25867.73638588162,
            "unit": "iter/sec",
            "range": "stddev: 4.6543732099872536e-7",
            "extra": "mean: 38.65819509996982 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 13521.994947307026,
            "unit": "iter/sec",
            "range": "stddev: 3.0666903191166533e-7",
            "extra": "mean: 73.95358479993774 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 13091.084661887826,
            "unit": "iter/sec",
            "range": "stddev: 5.031995343068915e-7",
            "extra": "mean: 76.38786439990781 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 14706.778514817888,
            "unit": "iter/sec",
            "range": "stddev: 2.080166542454637e-7",
            "extra": "mean: 67.99585639998895 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 22056.005615009304,
            "unit": "iter/sec",
            "range": "stddev: 0.000001753909662447993",
            "extra": "mean: 45.339125200416674 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 12515.313800499194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029143337630549402",
            "extra": "mean: 79.90211160027911 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 12840.267423736097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033819983789831857",
            "extra": "mean: 77.87999790031108 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 13714.87087369527,
            "unit": "iter/sec",
            "range": "stddev: 0.000002709463959996156",
            "extra": "mean: 72.9135556002916 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31385.962222823426,
            "unit": "iter/sec",
            "range": "stddev: 2.2545361197823226e-7",
            "extra": "mean: 31.861377800066748 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 32058.12831122861,
            "unit": "iter/sec",
            "range": "stddev: 1.8693875722418301e-7",
            "extra": "mean: 31.193336999956504 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5766.4983284153495,
            "unit": "iter/sec",
            "range": "stddev: 8.746439326356373e-7",
            "extra": "mean: 173.4154668999622 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 24308.9637988572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012920729874416235",
            "extra": "mean: 41.13708870005439 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16643.427809014243,
            "unit": "iter/sec",
            "range": "stddev: 2.2907136104921006e-7",
            "extra": "mean: 60.083776700037106 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24823.69418033218,
            "unit": "iter/sec",
            "range": "stddev: 1.8353960906939344e-7",
            "extra": "mean: 40.28409280002734 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17542.195571845503,
            "unit": "iter/sec",
            "range": "stddev: 2.4876383821164353e-7",
            "extra": "mean: 57.00540709995039 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 10677.09843669102,
            "unit": "iter/sec",
            "range": "stddev: 2.8579121620119186e-7",
            "extra": "mean: 93.65840410008559 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2005.2211949466669,
            "unit": "iter/sec",
            "range": "stddev: 0.00027896845926645873",
            "extra": "mean: 498.6981000001834 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2123.4686604345356,
            "unit": "iter/sec",
            "range": "stddev: 0.00003785107095084194",
            "extra": "mean: 470.9276000312457 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 31999.291919682924,
            "unit": "iter/sec",
            "range": "stddev: 4.597986304215591e-7",
            "extra": "mean: 31.250691499985805 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 120442.99124910518,
            "unit": "iter/sec",
            "range": "stddev: 7.020070947180818e-8",
            "extra": "mean: 8.30268319998595 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22236.651342873756,
            "unit": "iter/sec",
            "range": "stddev: 0.00005266544038817935",
            "extra": "mean: 44.97079999055131 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 27511.40342858935,
            "unit": "iter/sec",
            "range": "stddev: 3.3076608989559604e-7",
            "extra": "mean: 36.348563699982606 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20612.764216801825,
            "unit": "iter/sec",
            "range": "stddev: 2.791216723257805e-7",
            "extra": "mean: 48.51362919995381 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 30168.28593933698,
            "unit": "iter/sec",
            "range": "stddev: 2.0344609636014132e-7",
            "extra": "mean: 33.1473920000235 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112335.78207655973,
            "unit": "iter/sec",
            "range": "stddev: 1.5150836913455266e-7",
            "extra": "mean: 8.901883100065788 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 27134.573957518776,
            "unit": "iter/sec",
            "range": "stddev: 3.326517029812784e-7",
            "extra": "mean: 36.8533518000163 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5439.547468989915,
            "unit": "iter/sec",
            "range": "stddev: 4.7399929761368503e-7",
            "extra": "mean: 183.83882219998213 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23504.249332067327,
            "unit": "iter/sec",
            "range": "stddev: 2.2144863237023874e-7",
            "extra": "mean: 42.545498299989504 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8854.920343986969,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016872597492395315",
            "extra": "mean: 112.93156360001149 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 21728.805142767473,
            "unit": "iter/sec",
            "range": "stddev: 3.0281047551901364e-7",
            "extra": "mean: 46.021858699987206 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 13162.733912042508,
            "unit": "iter/sec",
            "range": "stddev: 4.258157737535855e-7",
            "extra": "mean: 75.97205920003489 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14992.278968004402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.70100003702828 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 644.1212402229119,
            "unit": "iter/sec",
            "range": "stddev: 0.000009002376307698582",
            "extra": "mean: 1.552502754999864 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 810.867405848866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308089336965766",
            "extra": "mean: 1.2332472520006377 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 5528.022047081813,
            "unit": "iter/sec",
            "range": "stddev: 7.938931800821858e-7",
            "extra": "mean: 180.89652890004118 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3487.6292944919755,
            "unit": "iter/sec",
            "range": "stddev: 7.744752752434362e-7",
            "extra": "mean: 286.72772119998626 usec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ebc439b6a2e1aed8281ba04b97d9a1d3c596576",
          "message": "[BugFix] Key checks in TensorDictSequential (#340)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-17T21:38:27+01:00",
          "tree_id": "558f8a8e0d5ffc23b869d60bc6bf2cf63540c76c",
          "url": "https://github.com/apbard/tensordict/commit/5ebc439b6a2e1aed8281ba04b97d9a1d3c596576"
        },
        "date": 1681803586568,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 960.1975752614571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033379223033817416",
            "extra": "mean: 1.0414523279000207 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 263335.96529058163,
            "unit": "iter/sec",
            "range": "stddev: 4.330838418168916e-8",
            "extra": "mean: 3.7974303999703807 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 90644.08550884308,
            "unit": "iter/sec",
            "range": "stddev: 6.543873321896864e-8",
            "extra": "mean: 11.032159399991315 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 45837.3767247215,
            "unit": "iter/sec",
            "range": "stddev: 1.4359531028113155e-7",
            "extra": "mean: 21.816257200003975 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 47815.4276295023,
            "unit": "iter/sec",
            "range": "stddev: 1.6001757207644198e-7",
            "extra": "mean: 20.913752100022975 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 39552.93147518944,
            "unit": "iter/sec",
            "range": "stddev: 2.1214305647547674e-7",
            "extra": "mean: 25.282576100011056 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 25690.213309131857,
            "unit": "iter/sec",
            "range": "stddev: 4.371964353534753e-7",
            "extra": "mean: 38.92532879999635 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 13687.996176512335,
            "unit": "iter/sec",
            "range": "stddev: 3.325831213525278e-7",
            "extra": "mean: 73.05671240001743 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 13278.205869640105,
            "unit": "iter/sec",
            "range": "stddev: 5.622367414374042e-7",
            "extra": "mean: 75.31137940001713 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 14785.17306178417,
            "unit": "iter/sec",
            "range": "stddev: 3.450481843859616e-7",
            "extra": "mean: 67.63532599998712 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 21832.16221421642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016943342234287037",
            "extra": "mean: 45.803983599427056 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 12513.394212022367,
            "unit": "iter/sec",
            "range": "stddev: 0.000002908951746971674",
            "extra": "mean: 79.91436880005267 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 13046.548930627023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034500614145493155",
            "extra": "mean: 76.64862220019586 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 13635.317640214946,
            "unit": "iter/sec",
            "range": "stddev: 0.000002272836067635816",
            "extra": "mean: 73.33895889969426 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31463.322803435807,
            "unit": "iter/sec",
            "range": "stddev: 1.585019083158796e-7",
            "extra": "mean: 31.78303850001498 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 32073.367751741174,
            "unit": "iter/sec",
            "range": "stddev: 1.6875017610470587e-7",
            "extra": "mean: 31.178515700014483 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5766.7722190142495,
            "unit": "iter/sec",
            "range": "stddev: 8.271854769466203e-7",
            "extra": "mean: 173.40723059995184 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 24480.42668950244,
            "unit": "iter/sec",
            "range": "stddev: 2.2314451915037782e-7",
            "extra": "mean: 40.84896120004373 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16686.52351841266,
            "unit": "iter/sec",
            "range": "stddev: 1.8357874193859892e-7",
            "extra": "mean: 59.92860039999073 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24604.21082119613,
            "unit": "iter/sec",
            "range": "stddev: 2.1417788337498334e-7",
            "extra": "mean: 40.64344950005534 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17588.764783911785,
            "unit": "iter/sec",
            "range": "stddev: 1.905637143244622e-7",
            "extra": "mean: 56.85447570000406 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 10714.051172228908,
            "unit": "iter/sec",
            "range": "stddev: 2.5981843971578504e-7",
            "extra": "mean: 93.33537649997652 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2031.230576351269,
            "unit": "iter/sec",
            "range": "stddev: 0.0002634952958038378",
            "extra": "mean: 492.3124000015377 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2158.0457773489857,
            "unit": "iter/sec",
            "range": "stddev: 0.0000380742982447029",
            "extra": "mean: 463.3821999959764 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 32174.912709617904,
            "unit": "iter/sec",
            "range": "stddev: 6.330901640233402e-7",
            "extra": "mean: 31.080115400004615 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 123210.09764950216,
            "unit": "iter/sec",
            "range": "stddev: 9.556586903040681e-8",
            "extra": "mean: 8.11621789997048 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 23430.123171979,
            "unit": "iter/sec",
            "range": "stddev: 0.000047075215761015105",
            "extra": "mean: 42.68010000032518 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28537.710206837994,
            "unit": "iter/sec",
            "range": "stddev: 3.347176531989801e-7",
            "extra": "mean: 35.041353800011166 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20584.399881573234,
            "unit": "iter/sec",
            "range": "stddev: 2.531568559331639e-7",
            "extra": "mean: 48.580478700046115 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31191.2861078849,
            "unit": "iter/sec",
            "range": "stddev: 2.445843934036467e-7",
            "extra": "mean: 32.06023619998177 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112640.73220418587,
            "unit": "iter/sec",
            "range": "stddev: 1.2375999208092525e-7",
            "extra": "mean: 8.877783200017575 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 27362.238183371675,
            "unit": "iter/sec",
            "range": "stddev: 1.946226327430968e-7",
            "extra": "mean: 36.54671789998929 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5496.968662000365,
            "unit": "iter/sec",
            "range": "stddev: 5.770105161881952e-7",
            "extra": "mean: 181.9184466000024 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23899.59455292998,
            "unit": "iter/sec",
            "range": "stddev: 2.4431992115830615e-7",
            "extra": "mean: 41.84171400001446 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9004.342877408691,
            "unit": "iter/sec",
            "range": "stddev: 9.750674465287636e-7",
            "extra": "mean: 111.05752120001284 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 22150.003464917212,
            "unit": "iter/sec",
            "range": "stddev: 2.3296064656190808e-7",
            "extra": "mean: 45.146719800015944 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 13474.201311231593,
            "unit": "iter/sec",
            "range": "stddev: 3.2909128785348914e-7",
            "extra": "mean: 74.21590169997216 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13531.799726057643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.90000001805674 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule",
            "value": 57411.72445101449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013602012271118204",
            "extra": "mean: 17.418044999732274 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule_dispatch",
            "value": 24410.08132051632,
            "unit": "iter/sec",
            "range": "stddev: 0.000015237190006993675",
            "extra": "mean: 40.96668040018017 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq",
            "value": 40960.46322428046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016301364923069172",
            "extra": "mean: 24.41378639993559 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq_dispatch",
            "value": 18835.45841725462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033422060205627346",
            "extra": "mean: 53.09135449997484 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 629.4868259037147,
            "unit": "iter/sec",
            "range": "stddev: 0.000011577178466001694",
            "extra": "mean: 1.5885955969997667 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 825.4028599041735,
            "unit": "iter/sec",
            "range": "stddev: 0.000018025678101286207",
            "extra": "mean: 1.211529603999793 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 5486.694699240761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010559590035126984",
            "extra": "mean: 182.25909309996382 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3428.362808972298,
            "unit": "iter/sec",
            "range": "stddev: 5.248861768242115e-7",
            "extra": "mean: 291.6844148999985 usec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "961bf9d4da45cb3720409609bd3099de7cd3ae71",
          "message": "[Performance] Faster indexing (#376)",
          "timestamp": "2023-05-07T22:00:52+01:00",
          "tree_id": "b354d89032132c1ec02fcd4150eec16fa64e869d",
          "url": "https://github.com/apbard/tensordict/commit/961bf9d4da45cb3720409609bd3099de7cd3ae71"
        },
        "date": 1683645689874,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 533.0993579869175,
            "unit": "iter/sec",
            "range": "stddev: 0.00005151914279785404",
            "extra": "mean: 1.8758229306000032 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 215024.09011594878,
            "unit": "iter/sec",
            "range": "stddev: 4.97581323964178e-7",
            "extra": "mean: 4.650641700010283 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 52287.78128143079,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014479285799876484",
            "extra": "mean: 19.124927000012804 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 28257.84504820337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030494647843679036",
            "extra": "mean: 35.38840269999923 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 29150.88783766622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023417177030437496",
            "extra": "mean: 34.30427249999184 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 28169.73380137349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036022452455997714",
            "extra": "mean: 35.499092999992854 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 22708.608002123292,
            "unit": "iter/sec",
            "range": "stddev: 0.000002343912159190637",
            "extra": "mean: 44.03616460799793 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 10091.034824421551,
            "unit": "iter/sec",
            "range": "stddev: 0.000004476095235761152",
            "extra": "mean: 99.09786433199872 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 8175.583072718784,
            "unit": "iter/sec",
            "range": "stddev: 0.000004839909885850369",
            "extra": "mean: 122.31543501000112 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 11890.375250966747,
            "unit": "iter/sec",
            "range": "stddev: 0.000003989494760138463",
            "extra": "mean: 84.10163505299761 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[list]",
            "value": 9307.68434870629,
            "unit": "iter/sec",
            "range": "stddev: 0.000005436685861453774",
            "extra": "mean: 107.43810839900186 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 12866.810209884256,
            "unit": "iter/sec",
            "range": "stddev: 0.00008841100870886196",
            "extra": "mean: 77.71934020071285 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 7230.917455940006,
            "unit": "iter/sec",
            "range": "stddev: 0.000056478055826917494",
            "extra": "mean: 138.2950373992344 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 6970.848522782399,
            "unit": "iter/sec",
            "range": "stddev: 0.0000434543303601663",
            "extra": "mean: 143.45455890079393 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 8450.167768285817,
            "unit": "iter/sec",
            "range": "stddev: 0.00003274031832694814",
            "extra": "mean: 118.34084569931065 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 16735.153077160823,
            "unit": "iter/sec",
            "range": "stddev: 0.000002617598573948498",
            "extra": "mean: 59.754457900044144 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 16873.79916025509,
            "unit": "iter/sec",
            "range": "stddev: 0.000004941226830412925",
            "extra": "mean: 59.26347650002981 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3039.6269884538933,
            "unit": "iter/sec",
            "range": "stddev: 0.00001469263214249976",
            "extra": "mean: 328.98773559996926 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 14101.811553966938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019714024536168367",
            "extra": "mean: 70.91287499999908 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 9942.235413401051,
            "unit": "iter/sec",
            "range": "stddev: 0.000004620459373680482",
            "extra": "mean: 100.581002000024 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 13408.109735614255,
            "unit": "iter/sec",
            "range": "stddev: 0.000006703314915294808",
            "extra": "mean: 74.58172850001574 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 10340.825608252537,
            "unit": "iter/sec",
            "range": "stddev: 0.000005194018380936166",
            "extra": "mean: 96.70407739996563 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 6688.106600695027,
            "unit": "iter/sec",
            "range": "stddev: 0.000006387930955100086",
            "extra": "mean: 149.51914789995726 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1654.828574713745,
            "unit": "iter/sec",
            "range": "stddev: 0.0003108243525549052",
            "extra": "mean: 604.2921999778628 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1673.718040735263,
            "unit": "iter/sec",
            "range": "stddev: 0.00006435343532826994",
            "extra": "mean: 597.4722000132715 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 16475.94972255369,
            "unit": "iter/sec",
            "range": "stddev: 0.000005414964630219869",
            "extra": "mean: 60.694528499993794 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 84951.28362476302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016096308447207457",
            "extra": "mean: 11.771452499965562 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 15718.253453380274,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698055494336148",
            "extra": "mean: 63.620299988542676 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 22336.315376600312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025914429135184214",
            "extra": "mean: 44.77014150004379 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 15376.564121010562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036425814922858764",
            "extra": "mean: 65.03403440002558 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 24692.74459847621,
            "unit": "iter/sec",
            "range": "stddev: 0.000002233788918216073",
            "extra": "mean: 40.497725800059925 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 88510.37290235542,
            "unit": "iter/sec",
            "range": "stddev: 0.00000175825933161822",
            "extra": "mean: 11.29811079999854 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 21944.399203634497,
            "unit": "iter/sec",
            "range": "stddev: 0.000002066911551890521",
            "extra": "mean: 45.5697141999849 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 3663.4428333108976,
            "unit": "iter/sec",
            "range": "stddev: 0.00000801521688299629",
            "extra": "mean: 272.96727299992654 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 18431.285496955476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022613400143861686",
            "extra": "mean: 54.25557540005457 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 5643.68551753536,
            "unit": "iter/sec",
            "range": "stddev: 0.000012402783738542319",
            "extra": "mean: 177.18917839998767 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 15823.065819744997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027902253281301737",
            "extra": "mean: 63.19887760007532 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 7410.431049912597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000111876947093576",
            "extra": "mean: 134.94491659993173 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14245.014248682313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.19999998192361 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule",
            "value": 23271.61884617572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001810167353521033",
            "extra": "mean: 42.97079660035479 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule_dispatch",
            "value": 10397.45628304909,
            "unit": "iter/sec",
            "range": "stddev: 0.0005946416253527207",
            "extra": "mean: 96.17737000061197 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq",
            "value": 17967.597636914907,
            "unit": "iter/sec",
            "range": "stddev: 0.00002911347580972382",
            "extra": "mean: 55.655743199940844 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq_dispatch",
            "value": 9430.820742121497,
            "unit": "iter/sec",
            "range": "stddev: 0.00002893910666666029",
            "extra": "mean: 106.03530989976662 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 476.491304664628,
            "unit": "iter/sec",
            "range": "stddev: 0.00011239047382742653",
            "extra": "mean: 2.0986741839997194 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 624.2943402075858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006881117754580422",
            "extra": "mean: 1.6018085310007564 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 3548.515578220202,
            "unit": "iter/sec",
            "range": "stddev: 0.000012297460463199028",
            "extra": "mean: 281.8079780000744 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1887.5603836231498,
            "unit": "iter/sec",
            "range": "stddev: 0.000018237687068636958",
            "extra": "mean: 529.784375999941 usec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8913d81696d29e3e8e9d7d1ee0fb461fe1ed1918",
          "message": "[Versioning] v0.1.2 (#380)",
          "timestamp": "2023-05-09T16:37:37+01:00",
          "tree_id": "24558fe159f3ee8fc96eadf408b05d91fc19dcd0",
          "url": "https://github.com/apbard/tensordict/commit/8913d81696d29e3e8e9d7d1ee0fb461fe1ed1918"
        },
        "date": 1684341034792,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 873.0271731678072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025574702611576304",
            "extra": "mean: 1.1454397190999999 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 240460.05972718968,
            "unit": "iter/sec",
            "range": "stddev: 1.1495882308595167e-7",
            "extra": "mean: 4.158694800020157 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 61997.93298894274,
            "unit": "iter/sec",
            "range": "stddev: 9.653743665487626e-8",
            "extra": "mean: 16.129569999992555 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 38031.30594871551,
            "unit": "iter/sec",
            "range": "stddev: 1.7323669534071398e-7",
            "extra": "mean: 26.294127299979664 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 35748.32935901825,
            "unit": "iter/sec",
            "range": "stddev: 1.615704608229738e-7",
            "extra": "mean: 27.973335200005067 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 37914.62409211095,
            "unit": "iter/sec",
            "range": "stddev: 1.4289969167577597e-7",
            "extra": "mean: 26.37504720000834 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 31888.560720363614,
            "unit": "iter/sec",
            "range": "stddev: 1.0497615469658931e-7",
            "extra": "mean: 31.35920773499862 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 15791.679036903657,
            "unit": "iter/sec",
            "range": "stddev: 3.7116319063749936e-7",
            "extra": "mean: 63.324488653999076 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 15540.453364214585,
            "unit": "iter/sec",
            "range": "stddev: 1.8400825668091032e-7",
            "extra": "mean: 64.34818705500095 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 17093.64629221358,
            "unit": "iter/sec",
            "range": "stddev: 2.56366121116897e-7",
            "extra": "mean: 58.501269003999255 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[list]",
            "value": 17886.833041063404,
            "unit": "iter/sec",
            "range": "stddev: 1.5695978922327315e-7",
            "extra": "mean: 55.907046132999994 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 22190.374448733728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012977634159009005",
            "extra": "mean: 45.0645843002917 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 12422.490939204614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019380670756102807",
            "extra": "mean: 80.4991531001292 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 13085.382074951915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024674368463458295",
            "extra": "mean: 76.42115409944381 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 13450.513037119914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017878075694964533",
            "extra": "mean: 74.34660650045544 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 28255.93706753983,
            "unit": "iter/sec",
            "range": "stddev: 2.1519020545404718e-7",
            "extra": "mean: 35.39079230002926 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 28670.905883711417,
            "unit": "iter/sec",
            "range": "stddev: 1.8942877133168276e-7",
            "extra": "mean: 34.87856310002826 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6555.532120401639,
            "unit": "iter/sec",
            "range": "stddev: 7.255540131224758e-7",
            "extra": "mean: 152.54291820001527 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 22514.877960792437,
            "unit": "iter/sec",
            "range": "stddev: 2.951360845995072e-7",
            "extra": "mean: 44.41507530004856 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 15507.151415966104,
            "unit": "iter/sec",
            "range": "stddev: 3.3354834262012403e-7",
            "extra": "mean: 64.48637619997726 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 22691.983649977512,
            "unit": "iter/sec",
            "range": "stddev: 3.4948845840691485e-7",
            "extra": "mean: 44.068425899865815 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15753.79274490789,
            "unit": "iter/sec",
            "range": "stddev: 2.9032606045206385e-7",
            "extra": "mean: 63.47677769997518 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 9720.004538386112,
            "unit": "iter/sec",
            "range": "stddev: 3.533837362818622e-7",
            "extra": "mean: 102.88061040000684 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2394.7541473926567,
            "unit": "iter/sec",
            "range": "stddev: 0.0002412571415498744",
            "extra": "mean: 417.5793999934285 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2640.6865361882965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005636880033998066",
            "extra": "mean: 378.68940000862494 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33789.643204701235,
            "unit": "iter/sec",
            "range": "stddev: 7.254190188974791e-7",
            "extra": "mean: 29.59486710001329 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 124129.5662436196,
            "unit": "iter/sec",
            "range": "stddev: 6.847893324122485e-8",
            "extra": "mean: 8.056098399936218 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25542.84940035759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000409478433812584",
            "extra": "mean: 39.14990001021579 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28437.116980505365,
            "unit": "iter/sec",
            "range": "stddev: 3.546406664751519e-7",
            "extra": "mean: 35.165308799957984 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 21063.366845358436,
            "unit": "iter/sec",
            "range": "stddev: 2.366187439629449e-7",
            "extra": "mean: 47.47579089998908 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 30597.805387694287,
            "unit": "iter/sec",
            "range": "stddev: 1.187424845393309e-7",
            "extra": "mean: 32.682082500014076 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111619.88695839008,
            "unit": "iter/sec",
            "range": "stddev: 1.359726757896642e-7",
            "extra": "mean: 8.958976999974766 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 26902.949243592477,
            "unit": "iter/sec",
            "range": "stddev: 2.0652698891864563e-7",
            "extra": "mean: 37.17064590002792 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5737.710774261401,
            "unit": "iter/sec",
            "range": "stddev: 6.350637276409209e-7",
            "extra": "mean: 174.2855363999638 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 24038.99345891386,
            "unit": "iter/sec",
            "range": "stddev: 2.0124443731385477e-7",
            "extra": "mean: 41.59907950011075 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8744.485540512524,
            "unit": "iter/sec",
            "range": "stddev: 0.000001288515633988877",
            "extra": "mean: 114.35778529989875 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 22294.413365794044,
            "unit": "iter/sec",
            "range": "stddev: 3.4952726909948156e-7",
            "extra": "mean: 44.8542863000057 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14153.441518713926,
            "unit": "iter/sec",
            "range": "stddev: 2.514259482080267e-7",
            "extra": "mean: 70.6541937999873 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15624.999983938182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.00000006578921 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule",
            "value": 36284.1996957541,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010787425221683588",
            "extra": "mean: 27.560205499503354 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule_dispatch",
            "value": 16141.474861703911,
            "unit": "iter/sec",
            "range": "stddev: 0.00037297255467508907",
            "extra": "mean: 61.95220750072394 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq",
            "value": 29368.258049891803,
            "unit": "iter/sec",
            "range": "stddev: 0.000015976614408608454",
            "extra": "mean: 34.050368200291814 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq_dispatch",
            "value": 16488.64301974554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028979004090640983",
            "extra": "mean: 60.64780460117163 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 665.4709621948903,
            "unit": "iter/sec",
            "range": "stddev: 0.000009924374649513654",
            "extra": "mean: 1.502695168999935 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 840.5887758830454,
            "unit": "iter/sec",
            "range": "stddev: 0.0004765937584715588",
            "extra": "mean: 1.1896423419995017 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 5738.051013281848,
            "unit": "iter/sec",
            "range": "stddev: 9.174645102162512e-7",
            "extra": "mean: 174.27520210003422 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3201.9060101170717,
            "unit": "iter/sec",
            "range": "stddev: 6.848353036528702e-7",
            "extra": "mean: 312.3139770000421 usec\nrounds: 100"
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
      },
      {
        "commit": {
          "author": {
            "email": "apbard@users.noreply.github.com",
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard"
          },
          "committer": {
            "email": "apbard@users.noreply.github.com",
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard"
          },
          "distinct": true,
          "id": "05ee7207bd364926145bef934e7f7904b1c52b02",
          "message": "[CI] run benchmarks and comment on PR",
          "timestamp": "2023-04-07T17:12:53+02:00",
          "tree_id": "a7168e87d13568e9faaca55a70b4160dee83050c",
          "url": "https://github.com/apbard/tensordict/commit/05ee7207bd364926145bef934e7f7904b1c52b02"
        },
        "date": 1680881045818,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 741.4993626418717,
            "unit": "iter/sec",
            "range": "stddev: 0.000054343318196689264",
            "extra": "mean: 1.348618826100028 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 312604.67372113076,
            "unit": "iter/sec",
            "range": "stddev: 5.910433157619905e-7",
            "extra": "mean: 3.198928500000875 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 96325.53623392616,
            "unit": "iter/sec",
            "range": "stddev: 0.000002626944699753692",
            "extra": "mean: 10.381463099997745 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49809.65117268731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029109001645750427",
            "extra": "mean: 20.07643050004617 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50671.09405010622,
            "unit": "iter/sec",
            "range": "stddev: 0.000004383092779808692",
            "extra": "mean: 19.735117600009744 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 35891.435585633946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029134931614958685",
            "extra": "mean: 27.861800000005132 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 24341.401692518757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033426212637535562",
            "extra": "mean: 41.08226850006531 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 11266.943454904389,
            "unit": "iter/sec",
            "range": "stddev: 0.00000832530296964295",
            "extra": "mean: 88.75521600001548 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 8879.07653854075,
            "unit": "iter/sec",
            "range": "stddev: 0.00000555373591265626",
            "extra": "mean: 112.62432479992412 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 14098.25248099462,
            "unit": "iter/sec",
            "range": "stddev: 0.000009447987932247765",
            "extra": "mean: 70.93077680003717 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 16023.423270838897,
            "unit": "iter/sec",
            "range": "stddev: 0.00004959128998299039",
            "extra": "mean: 62.40863660013929 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 7969.755746153324,
            "unit": "iter/sec",
            "range": "stddev: 0.00009525464161668924",
            "extra": "mean: 125.47435979862485 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 8002.057098452307,
            "unit": "iter/sec",
            "range": "stddev: 0.00007067959461758152",
            "extra": "mean: 124.96786609950732 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 10487.890895111997,
            "unit": "iter/sec",
            "range": "stddev: 0.00003386110523960651",
            "extra": "mean: 95.34805520012242 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 25632.463412363915,
            "unit": "iter/sec",
            "range": "stddev: 0.000004287021014900135",
            "extra": "mean: 39.01302750002742 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 25497.988463653935,
            "unit": "iter/sec",
            "range": "stddev: 0.000006276387696651167",
            "extra": "mean: 39.21878000005563 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3630.636434129819,
            "unit": "iter/sec",
            "range": "stddev: 0.000015181189493894227",
            "extra": "mean: 275.43380290009054 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 20737.323070177667,
            "unit": "iter/sec",
            "range": "stddev: 0.00000558845538976547",
            "extra": "mean: 48.222231799923065 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 14423.883904709033,
            "unit": "iter/sec",
            "range": "stddev: 0.000004320270341794708",
            "extra": "mean: 69.3294542999979 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 22014.04939716071,
            "unit": "iter/sec",
            "range": "stddev: 0.000002900902576750603",
            "extra": "mean: 45.42553629996746 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14413.480504001975,
            "unit": "iter/sec",
            "range": "stddev: 0.000009488679457133321",
            "extra": "mean: 69.37949509990631 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 9110.36146845505,
            "unit": "iter/sec",
            "range": "stddev: 0.000008034367696260246",
            "extra": "mean: 109.76512880005203 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1562.5534685643095,
            "unit": "iter/sec",
            "range": "stddev: 0.0003145822414473054",
            "extra": "mean: 639.9781000254734 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1846.324162449348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619478413610887",
            "extra": "mean: 541.6167000021233 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 16680.309185696904,
            "unit": "iter/sec",
            "range": "stddev: 0.000002611348738728972",
            "extra": "mean: 59.95092710016934 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 92801.18645981634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025214380518470975",
            "extra": "mean: 10.775724299958256 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 12772.876542920723,
            "unit": "iter/sec",
            "range": "stddev: 0.00005552806773568491",
            "extra": "mean: 78.29089998949712 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 27623.92677790596,
            "unit": "iter/sec",
            "range": "stddev: 0.00000384901749055333",
            "extra": "mean: 36.20050140010562 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20963.4443921925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034778728139076925",
            "extra": "mean: 47.702084699994884 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 33043.68603962532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030632814278325326",
            "extra": "mean: 30.262967599946933 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 129764.18668054833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012833981264037796",
            "extra": "mean: 7.706286500001624 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 29871.203673891334,
            "unit": "iter/sec",
            "range": "stddev: 0.00000308654596750068",
            "extra": "mean: 33.47705740006859 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4966.729855937039,
            "unit": "iter/sec",
            "range": "stddev: 0.000012897735437788497",
            "extra": "mean: 201.3397202999954 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23557.28002695358,
            "unit": "iter/sec",
            "range": "stddev: 0.000003928744528920099",
            "extra": "mean: 42.44972250004366 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7594.833911337328,
            "unit": "iter/sec",
            "range": "stddev: 0.000007123587309558299",
            "extra": "mean: 131.66844880007602 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 17355.91702150934,
            "unit": "iter/sec",
            "range": "stddev: 0.000002304293074532964",
            "extra": "mean: 57.617237899944485 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 9028.740573203138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074372462097895",
            "extra": "mean: 110.75741870000684 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 7331.270798907643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.4020000664823 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 547.8339099437856,
            "unit": "iter/sec",
            "range": "stddev: 0.00017377555963772712",
            "extra": "mean: 1.8253707589999522 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 688.752327363085,
            "unit": "iter/sec",
            "range": "stddev: 0.000650965875664544",
            "extra": "mean: 1.4519007199997986 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 3735.5813033575373,
            "unit": "iter/sec",
            "range": "stddev: 0.000020667922821064295",
            "extra": "mean: 267.69595380006876 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2652.4057511005312,
            "unit": "iter/sec",
            "range": "stddev: 0.000024166073803841323",
            "extra": "mean: 377.0162236999681 usec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ebc439b6a2e1aed8281ba04b97d9a1d3c596576",
          "message": "[BugFix] Key checks in TensorDictSequential (#340)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-17T21:38:27+01:00",
          "tree_id": "558f8a8e0d5ffc23b869d60bc6bf2cf63540c76c",
          "url": "https://github.com/apbard/tensordict/commit/5ebc439b6a2e1aed8281ba04b97d9a1d3c596576"
        },
        "date": 1681803766234,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1090.5448909510135,
            "unit": "iter/sec",
            "range": "stddev: 0.000004272252960849133",
            "extra": "mean: 916.9727980000403 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 337540.0499701816,
            "unit": "iter/sec",
            "range": "stddev: 4.674040542180368e-8",
            "extra": "mean: 2.962611400005244 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 114899.06915341094,
            "unit": "iter/sec",
            "range": "stddev: 8.34591063283366e-8",
            "extra": "mean: 8.70329069998661 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 60024.77306454837,
            "unit": "iter/sec",
            "range": "stddev: 1.443222143822551e-7",
            "extra": "mean: 16.659788099900652 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 59279.238909658205,
            "unit": "iter/sec",
            "range": "stddev: 9.10271384574035e-8",
            "extra": "mean: 16.869312399978753 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 49150.332548958075,
            "unit": "iter/sec",
            "range": "stddev: 2.0690935338587502e-7",
            "extra": "mean: 20.345742299991798 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 34509.36415039597,
            "unit": "iter/sec",
            "range": "stddev: 5.77558701177411e-7",
            "extra": "mean: 28.977642000063497 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 17933.64413222153,
            "unit": "iter/sec",
            "range": "stddev: 4.273448312339287e-7",
            "extra": "mean: 55.76111540003694 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 15812.367787373685,
            "unit": "iter/sec",
            "range": "stddev: 6.07547346563764e-7",
            "extra": "mean: 63.24163549993499 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 19097.80195990235,
            "unit": "iter/sec",
            "range": "stddev: 2.528737857212709e-7",
            "extra": "mean: 52.362046799919426 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 26772.343388559897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018174599751276844",
            "extra": "mean: 37.35197870005322 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 15279.409994474676,
            "unit": "iter/sec",
            "range": "stddev: 0.000002451442812446187",
            "extra": "mean: 65.44755329961163 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 14943.214239367144,
            "unit": "iter/sec",
            "range": "stddev: 0.000002961791873336827",
            "extra": "mean: 66.92000689955648 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 16790.49999009915,
            "unit": "iter/sec",
            "range": "stddev: 0.000002209812024186591",
            "extra": "mean: 59.5574879002811 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39863.12644733329,
            "unit": "iter/sec",
            "range": "stddev: 2.3301904888280896e-7",
            "extra": "mean: 25.085839700034285 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40812.87859200183,
            "unit": "iter/sec",
            "range": "stddev: 2.2008723655075754e-7",
            "extra": "mean: 24.502069799996207 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6060.901211805229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010164715373797159",
            "extra": "mean: 164.99196489991164 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 30789.365782909834,
            "unit": "iter/sec",
            "range": "stddev: 2.775227269283e-7",
            "extra": "mean: 32.47874629996659 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 20857.72766255172,
            "unit": "iter/sec",
            "range": "stddev: 0.000002323552527952066",
            "extra": "mean: 47.94386119996261 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32138.155502832225,
            "unit": "iter/sec",
            "range": "stddev: 2.813689420239863e-7",
            "extra": "mean: 31.11566250004216 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 22712.832630980873,
            "unit": "iter/sec",
            "range": "stddev: 2.582870663850506e-7",
            "extra": "mean: 44.0279737999731 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 13604.684497734625,
            "unit": "iter/sec",
            "range": "stddev: 3.3166665870444957e-7",
            "extra": "mean: 73.50409340007218 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2035.2981761589492,
            "unit": "iter/sec",
            "range": "stddev: 0.0002556327256691059",
            "extra": "mean: 491.3285000270662 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2172.270618088514,
            "unit": "iter/sec",
            "range": "stddev: 0.00003804185086171431",
            "extra": "mean: 460.3477999808092 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33050.153886199645,
            "unit": "iter/sec",
            "range": "stddev: 6.247338376452692e-7",
            "extra": "mean: 30.257045199948607 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 121225.59415222761,
            "unit": "iter/sec",
            "range": "stddev: 9.311955057374788e-8",
            "extra": "mean: 8.249083099929067 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 21403.697273692134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005708280423310174",
            "extra": "mean: 46.720900002128474 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35631.99172058471,
            "unit": "iter/sec",
            "range": "stddev: 2.9463719232734936e-7",
            "extra": "mean: 28.064667499972984 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25939.692264711048,
            "unit": "iter/sec",
            "range": "stddev: 4.0865203320103137e-7",
            "extra": "mean: 38.55095850001362 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39015.94803022652,
            "unit": "iter/sec",
            "range": "stddev: 2.495899834767604e-7",
            "extra": "mean: 25.630544699959046 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 142900.59280256342,
            "unit": "iter/sec",
            "range": "stddev: 1.4937817755456995e-7",
            "extra": "mean: 6.9978716000264285 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 33496.485446554194,
            "unit": "iter/sec",
            "range": "stddev: 2.2653980950545366e-7",
            "extra": "mean: 29.85387830002537 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7336.573884321709,
            "unit": "iter/sec",
            "range": "stddev: 5.54581021346017e-7",
            "extra": "mean: 136.30340480002587 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 29775.088479863087,
            "unit": "iter/sec",
            "range": "stddev: 2.6507384017815304e-7",
            "extra": "mean: 33.585122700014836 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 11075.059797960539,
            "unit": "iter/sec",
            "range": "stddev: 4.911095364874808e-7",
            "extra": "mean: 90.29296619997922 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 26575.923918646,
            "unit": "iter/sec",
            "range": "stddev: 2.5612564670476803e-7",
            "extra": "mean: 37.628042699896014 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 16591.626665948654,
            "unit": "iter/sec",
            "range": "stddev: 3.190230565565602e-7",
            "extra": "mean: 60.27136579997432 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12771.065869911581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.30200001990306 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule",
            "value": 67467.45771317984,
            "unit": "iter/sec",
            "range": "stddev: 0.000001228959099083667",
            "extra": "mean: 14.821960599897466 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule_dispatch",
            "value": 26036.837986088933,
            "unit": "iter/sec",
            "range": "stddev: 0.00002072324954452245",
            "extra": "mean: 38.407121499710684 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq",
            "value": 44671.56241042771,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022157367097881183",
            "extra": "mean: 22.38560610019249 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq_dispatch",
            "value": 20902.358058591573,
            "unit": "iter/sec",
            "range": "stddev: 0.000003258241651744027",
            "extra": "mean: 47.84149219896108 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 769.6134684084357,
            "unit": "iter/sec",
            "range": "stddev: 0.000010565580508025479",
            "extra": "mean: 1.2993535599994175 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 1005.5738313906568,
            "unit": "iter/sec",
            "range": "stddev: 0.000018223150272702357",
            "extra": "mean: 994.4570640000164 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 6422.202047758165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036749957312955648",
            "extra": "mean: 155.7098317000282 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 4199.207118730396,
            "unit": "iter/sec",
            "range": "stddev: 7.079379062894513e-7",
            "extra": "mean: 238.14019449994248 usec\nrounds: 100"
          }
        ]
      }
    ]
  }
}