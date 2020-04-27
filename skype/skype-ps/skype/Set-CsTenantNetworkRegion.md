---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-cstenantnetworkregion
applicable: Skype for Business Online
title: Set-CsTenantNetworkRegion
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTenantNetworkRegion

## SYNOPSIS
As an Admin, you can use the Windows PowerShell command, Set-CsTenantNetworkRegion to define network regions. A network region interconnects various parts of a network across multiple geographic areas. The RegionID parameter is a logical name that represents the geography of the region, and has no dependencies or restrictions. Tenant network region is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
Set-CsTenantNetworkRegion [-Tenant <System.Guid>] [-Description <String>] [-NetworkRegionID <String>]
 [-CentralSite <String>] [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsTenantNetworkRegion [-Tenant <System.Guid>] [-Description <String>] [-NetworkRegionID <String>]
 [-CentralSite <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. A network region contains a collection of network sites. For example, if your organization has many sites located in Redmond, then you may choose to designate "Redmond" as a network region.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> Set-CsTenantNetworkRegion -Identity "RegionA" -Description "Region A"
```

The command shown in Example 1 set the network region 'RegionA' with description 'Region A'.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> Set-CsTenantNetworkRegion -Identity "RegionRedmond" -Description "Redmond region" -CentralSite "Central site 1"
```

The command shown in Example 2 set the network region 'RegionRedmond' with description 'Redmond region'. CentralSite is set to "Central site 1".

Previously in Skype for Business there was an additional required parameter `-CentralSite <site ID>`, however it is now optional.

## PARAMETERS

### -CentralSite
This parameter is optional.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Provide a description of the network region to identify purpose of setting it.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the network region to be set.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
The Instance parameter allows you to pass a reference to an object to the cmdlet, rather than set individual parameter values.
You can retrieve this object reference by calling the `Get-CsTenantNetworkRegion` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NetworkRegionID
The name of the network region. Not required in this PowerShell command.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose network regions are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
