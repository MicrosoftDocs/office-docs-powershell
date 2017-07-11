---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsNetworkSite

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes a network site that has been defined for call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes a network site that has been defined for call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsNetworkSite [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet removes a site from the CAC or E9-1-1 configuration.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsNetworkSite cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsNetworkSite"}

**Below Content Applies To:** Skype for Business Server 2015

Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet removes a site from the CAC or E9-1-1 configuration.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsNetworkSite -Identity Vancouver
```

This example removes the site with the Identity Vancouver from the CAC or E9-1-1 configuration.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the site with the Identity Vancouver from the CAC or E9-1-1 configuration.

Remove-CsNetworkSite -Identity Vancouver

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the site with the Identity Vancouver from the CAC or E9-1-1 configuration.

Remove-CsNetworkSite -Identity Vancouver

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSite | Where-Object {$_.BWPolicyProfileID -eq "LowBWProfile"} | Remove-CsNetworkSite
```

Example 2 removes all sites that are using the bandwidth policy profile named LowBWProfile from the CAC or E9-1-1 configuration.
The example first calls Get-CsNetworkSite to retrieve all network sites.
This collection of sites is piped to the Where-Object cmdlet, which narrows the collection to only those sites that have a BWPolicyProfileID equal to (-eq) LowBWProfile.
This new collection is then piped to Remove-CsNetworkSite to remove those sites.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 removes all sites that are using the bandwidth policy profile named LowBWProfile from the CAC or E9-1-1 configuration.
The example first calls Get-CsNetworkSite to retrieve all network sites.
This collection of sites is piped to the Where-Object cmdlet, which narrows the collection to only those sites that have a BWPolicyProfileID equal to (-eq) LowBWProfile.
This new collection is then piped to Remove-CsNetworkSite to remove those sites.

Get-CsNetworkSite | Where-Object {$_.BWPolicyProfileID -eq "LowBWProfile"} | Remove-CsNetworkSite

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 removes all sites that are using the bandwidth policy profile named LowBWProfile from the CAC or E9-1-1 configuration.
The example first calls the Get-CsNetworkSite cmdlet to retrieve all network sites.
This collection of sites is piped to the Where-Object cmdlet, which narrows the collection to only those sites that have a BWPolicyProfileID equal to (-eq) LowBWProfile.
This new collection is then piped to the Remove-CsNetworkSite cmdlet to remove those sites.

Get-CsNetworkSite | Where-Object {$_.BWPolicyProfileID -eq "LowBWProfile"} | Remove-CsNetworkSite

## PARAMETERS

### -Identity
The unique identifier of the network site you want to remove.
Sites are created only at the global scope, so you do not need to specify a scope.
Instead, you need to specify only the site ID.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType object.
Accepts pipelined input of network site objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/07b543a6-3aa0-4fce-85f9-9ddc75d7b14f(OCS.14).aspx)

[New-CsNetworkSite]()

[Set-CsNetworkSite]()

[Get-CsNetworkSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/07b543a6-3aa0-4fce-85f9-9ddc75d7b14f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/07b543a6-3aa0-4fce-85f9-9ddc75d7b14f(OCS.16).aspx)

