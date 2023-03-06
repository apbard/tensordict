window.BENCHMARK_DATA = {
  "lastUpdate": 1678108615114,
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
      }
    ]
  }
}