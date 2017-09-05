---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsNetworkBWPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a bandwidth policy in memory that can be applied to the bandwidth policy profile.
In Microsoft Lync Server 2010, the policy applies to either audio or video bandwidth.

**Below Content Applies To:** Lync Server 2013

Creates a bandwidth policy in memory that can be applied to the bandwidth policy profile.
In Lync Server, the policy applies to either audio or video bandwidth.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates a bandwidth policy in memory that can be applied to the bandwidth policy profile.
In Skype for Business Server 2015, the policy applies to either audio or video bandwidth.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsNetworkBWPolicy -BWLimit <UInt32> -BWPolicyModality <BWPolicyModality> -BWSessionLimit <UInt32>
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

This cmdlet creates a new bandwidth policy.
A bandwidth policy is used to define bandwidth limitations for certain modalities.
(In Lync Server 2010, only audio and video modalities can be assigned bandwidth limitations.) The bandwidth policy is created only in memory, so the output must be assigned to a variable and then passed as a value to the BWPolicy parameter of the New-CsNetworkBandwidthPolicyProfile or Set-CsNetworkBandwidthPolicyProfile cmdlet.
Bandwidth policies are applied to policy profiles, which can store multiple policies for a single profile and are part of the global network configuration for call admission control (CAC).

Note that the recommended method of assigning audio and video policies is to assign them directly to a bandwidth policy profile by calling the New-CsNetworkBandwidthPolicyProfile or Set-CsNetworkBandwidthPolicyProfile cmdlet and specifying values for the AudioBWLimit, AudioBWSessionLimit, VideoBWLimit, and VideoBWSessionLimit parameters.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsNetworkBWPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsNetworkBWPolicy"}

**Below Content Applies To:** Lync Server 2013

This cmdlet creates a new bandwidth policy.
A bandwidth policy is used to define bandwidth limitations for certain modalities.
(In Lync Server, only audio and video modalities can be assigned bandwidth limitations.) The bandwidth policy is created only in memory, so the output must be assigned to a variable and then passed as a value to the BWPolicy parameter of the New-CsNetworkBandwidthPolicyProfile or Set-CsNetworkBandwidthPolicyProfile cmdlet.
Bandwidth policies are applied to policy profiles, which can store multiple policies for a single profile and are part of the global network configuration for call admission control (CAC).

Note that the recommended method of assigning audio and video policies is to assign them directly to a bandwidth policy profile by calling the New-CsNetworkBandwidthPolicyProfile or Set-CsNetworkBandwidthPolicyProfile cmdlet and specifying values for the AudioBWLimit, AudioBWSessionLimit, VideoBWLimit, and VideoBWSessionLimit parameters.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsNetworkBWPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsNetworkBWPolicy"}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet creates a new bandwidth policy.
A bandwidth policy is used to define bandwidth limitations for certain modalities.
(In Skype for Business Server 2015, only audio and video modalities can be assigned bandwidth limitations.) The bandwidth policy is created only in memory, so the output must be assigned to a variable and then passed as a value to the BWPolicy parameter of the New-CsNetworkBandwidthPolicyProfile cmdlet or the Set-CsNetworkBandwidthPolicyProfile cmdlet.
Bandwidth policies are applied to policy profiles, which can store multiple policies for a single profile and are part of the global network configuration for call admission control (CAC).

Note that the recommended method of assigning audio and video policies is to assign them directly to a bandwidth policy profile by calling the New-CsNetworkBandwidthPolicyProfile or the Set-CsNetworkBandwidthPolicyProfile cmdlet and specifying values for the AudioBWLimit, AudioBWSessionLimit, VideoBWLimit, and VideoBWSessionLimit parameters.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
$bwp = New-CsNetworkBWPolicy -BWLimit 200 -BWSessionLimit 3000 -BWPolicyModality video
```

This example creates a new bandwidth policy and assigns it to the variable $bwp.
All parameters for the New-CsNetworkBWPolicy cmdlet are required.
In this example we specified a total bandwidth limit (BWLimit) of 2000 kbps and a bandwidth session limit (BWSessionLimit) of 300 kbps, and we applied these limits to video sessions (-BWPolicyModality video).

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example creates a new bandwidth policy and assigns it to the variable $bwp.
All parameters for the New-CsNetworkBWPolicy cmdlet are required.
In this example we specified a total bandwidth limit (BWLimit) of 2000 kbps and a bandwidth session limit (BWSessionLimit) of 300 kbps, and we applied these limits to video sessions (-BWPolicyModality video).

$bwp = New-CsNetworkBWPolicy -BWLimit 200 -BWSessionLimit 3000 -BWPolicyModality video

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new bandwidth policy and assigns it to the variable $bwp.
All parameters for the New-CsNetworkBWPolicy cmdlet are required.
In this example we specified a total bandwidth limit (BWLimit) of 2000 kbps and a bandwidth session limit (BWSessionLimit) of 300 kbps, and we applied these limits to video sessions (-BWPolicyModality video).

$bwp = New-CsNetworkBWPolicy -BWLimit 200 -BWSessionLimit 3000 -BWPolicyModality video

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
$bwp = New-CsNetworkBWPolicy -BWLimit 200 -BWSessionLimit 3000 -BWPolicyModality video
New-CsNetworkBandwidthPolicyProfile -Identity LowBWLimit -BWPolicy $bwp
```

Example 2 expands on Example 1 by assigning the new bandwidth policy to a policy profile.
The command in line 1 is identical to Example 1: it creates video bandwidth limitations.
Line 2 then calls New-CsNetworkBandwidthPolicyProfile to add that policy to a new profile.
The new profile receives an Identity of LowBWLimit.
Then we use the BWPolicy parameter, giving it the value $bwp, which is the variable containing the new bandwidth policy we just created in Line 1.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 expands on Example 1 by assigning the new bandwidth policy to a policy profile.
The command in line 1 is identical to Example 1: it creates video bandwidth limitations.
Line 2 then calls New-CsNetworkBandwidthPolicyProfile to add that policy to a new profile.
The new profile receives an Identity of LowBWLimit.
Then we use the BWPolicy parameter, giving it the value $bwp, which is the variable containing the new bandwidth policy we just created in Line 1.

$bwp = New-CsNetworkBWPolicy -BWLimit 200 -BWSessionLimit 3000 -BWPolicyModality video

New-CsNetworkBandwidthPolicyProfile -Identity LowBWLimit -BWPolicy $bwp

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 expands on Example 1 by assigning the new bandwidth policy to a policy profile.
The command in line 1 is identical to Example 1: it creates video bandwidth limitations.
Line 2 then calls the New-CsNetworkBandwidthPolicyProfile cmdlet to add that policy to a new profile.
The new profile receives an Identity of LowBWLimit.
Then we use the BWPolicy parameter, giving it the value $bwp, which is the variable containing the new bandwidth policy we just created in Line 1.

$bwp = New-CsNetworkBWPolicy -BWLimit 200 -BWSessionLimit 3000 -BWPolicyModality video

New-CsNetworkBandwidthPolicyProfile -Identity LowBWLimit -BWPolicy $bwp

## PARAMETERS

### -BWLimit
The maximum total bandwidth, in kbps, for all concurrent sessions of the type specified in the BWPolicyModality parameter.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWPolicyModality
Determines which type of bandwidth is limited.

Valid values: Audio, Video

```yaml
Type: BWPolicyModality
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWSessionLimit
The maximum bandwidth, in kbps, allowed for a single session of the type specified in the BWPolicyModality parameter.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/bbc91bd1-453c-4ae6-bb77-3b6be9429ed0(OCS.14).aspx)

[New-CsNetworkBandwidthPolicyProfile]()

[Set-CsNetworkBandwidthPolicyProfile]()

[Online Version](http://technet.microsoft.com/EN-US/library/bbc91bd1-453c-4ae6-bb77-3b6be9429ed0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/bbc91bd1-453c-4ae6-bb77-3b6be9429ed0(OCS.16).aspx)

