---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsNetworkInterSitePolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new network inter-site policy that defines bandwidth limitations between sites that are directly linked within a call admission control (CAC) configuration.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Creates a new network inter-site policy that defines bandwidth limitations between sites that are directly linked within a call admission control (CAC) configuration.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsNetworkInterSitePolicy [-Identity] <XdsGlobalRelativeIdentity> -NetworkSiteID1 <String>
 -NetworkSiteID2 <String> [-BWPolicyProfileID <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsNetworkInterSitePolicy -InterNetworkSitePolicyID <String> -NetworkSiteID1 <String>
 -NetworkSiteID2 <String> [-BWPolicyProfileID <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

When network sites share a direct link, bandwidth limitations for audio and video connections can be defined between those two sites.
This cmdlet creates a network site policy that associates a bandwidth limitation policy with two directly connected sites.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsNetworkInterSitePolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsNetworkInterSitePolicy"}

Below Content Applies To: Skype for Business Server 2015

When network sites share a direct link, bandwidth limitations for audio and video connections can be defined between those two sites.
This cmdlet creates a network site policy that associates a bandwidth limitation policy with two directly connected sites.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsNetworkInterSitePolicy -Identity Reno_Portland -NetworkSiteID1 Reno -NetworkSiteID2 Portland -BWPolicyProfileID LowBWLimits
```

This example creates a new network inter-site policy that limits bandwidth between the connected sites Reno and Portland.
The bandwidth limitations for audio and video connections between these sites are limited based on the setting configured for the bandwidth policy profile LowBWLimits.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example creates a new network inter-site policy that limits bandwidth between the connected sites Reno and Portland.
The bandwidth limitations for audio and video connections between these sites are limited based on the setting configured for the bandwidth policy profile LowBWLimits.

New-CsNetworkInterSitePolicy -Identity Reno_Portland -NetworkSiteID1 Reno -NetworkSiteID2 Portland -BWPolicyProfileID LowBWLimits

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new network inter-site policy that limits bandwidth between the connected sites Reno and Portland.
The bandwidth limitations for audio and video connections between these sites are limited based on the setting configured for the bandwidth policy profile LowBWLimits.

New-CsNetworkInterSitePolicy -Identity Reno_Portland -NetworkSiteID1 Reno -NetworkSiteID2 Portland -BWPolicyProfileID LowBWLimits

## PARAMETERS

### -Identity
A unique identifier for the newly created network inter-site policy.
Network inter-site policies are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that site policy.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InterNetworkSitePolicyID
This value is the same as the Identity.
You cannot specify both an Identity and an InterNetworkSitePolicyID; a value entered for one will be automatically used for both.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteID1
The Identity (NetworkSiteID) of one of the two sites associated with this policy.
The combination of NetworkSiteID1 and NetworkSiteID2 must be unique (for example, you can't have two site policies defined that connect Reno and Portland).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteID2
The Identity (NetworkSiteID) of one of the two sites associated with this policy.
The combination of NetworkSiteID1 and NetworkSiteID2 must be unique (for example, you can't have two site policies defined that connect Reno and Portland).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWPolicyProfileID
The Identity of the bandwidth policy profile that will define the limitations for this site policy.
You can retrieve a list of available profiles by calling the Get-CsNetworkBandwidthPolicyProfile cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Below Content Applies To: Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
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
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkSitePolicyType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/e127153f-a1c3-4a31-8dd3-f08d45eca800(OCS.14).aspx)

[Remove-CsNetworkInterSitePolicy]()

[Set-CsNetworkInterSitePolicy]()

[Get-CsNetworkInterSitePolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/e127153f-a1c3-4a31-8dd3-f08d45eca800(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e127153f-a1c3-4a31-8dd3-f08d45eca800(OCS.16).aspx)

