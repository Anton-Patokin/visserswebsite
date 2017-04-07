<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class CitiesTabele extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->delete();
        $cities =[
            'antwerpen'=>["lat"=>'51.2194475',"long"=>'4.40246430000002','code'=>966591],
            'ostend'=>["lat"=>'51.21543',"long"=>'2.92865600000','code'=>975129],
            'bruge'=>['lat'=>'51.209348','long'=>'3.224699500','code'=>967974],
            'kortrijk'=>['lat'=>'50.8194776','long'=>'3.257726300','code'=>972288],
            'gent'=>['lat'=>'51.0543422','long'=>'3.717424299','code'=>970013],
            'tournai'=>['lat'=>'50.6056475','long'=>'3.38793380','code'=>977869],
            'mons'=>['lat'=>'50.45424080','long'=>'3.956658999','code'=>974484],
            'Charleroi'=>['lat'=>'50.4108095','long'=>'4.44464300','code'=>968259],
            'brussels'=>['lat'=>'50.8503396','long'=>'4.35171030','code'=>968019],
            'leuven'=>['lat'=>'50.8798438','long'=>'4.700517600','code'=>973505],
            'genk'=>['lat'=>'50.96613','long'=>'5.50209999','code'=>970002],
            'liege'=>['lat'=>'50.6325574','long'=>'5.57966620','code'=>973540],
            'namur'=>['lat'=>'50.4673883','long'=>'4.87198539','code'=>971718],
            'Dinant'=>['lat'=>'50.26049399','long'=>'4.912745699','code'=>976310],
            'Bastogne'=>['lat'=>'50.0005062','long'=>'5.715280200','code'=>966930],
            'arlon'=>['lat'=>'49.6851364','long'=>'5.810480399','code'=>966626],
            'turnhout'=>['lat'=>'51.3216509','long'=>'4.937557700','code'=>978020]
        ];

        foreach ($cities as $key=>$city){
            DB::table('cities')->insert([
                'name' => $key,
                'lat' => $city['lat'],
                'long' => $city['long'],
                'code'=>$city['code'],
                'created_at'=> Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at'=> Carbon::now()->format('Y-m-d H:i:s'),

            ]);
        }


    }
}
