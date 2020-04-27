---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-cstenantnetworkregion
applicable: Skype for Business Online
title: New-CsTenantNetworkRegion
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsTenantNetworkRegion

## SYNOPSIS
As an Admin, you can use the Windows PowerShell command, New-CsTenantNetworkRegion to define network regions. A network region interconnects various parts of a network across multiple geographic areas. The RegionID parameter is a logical name that represents the geography of the region, and has no dependencies or restrictions. Tenant network region is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
New-CsTenantNetworkRegion [-Tenant <System.Guid>] [-Description <String>] [-BypassID <String>]
 [-CentralSite <String>] [-Identity] <XdsGlobalRelativeIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTenantNetworkRegion -NetworkRegionID <String> [-Tenant <System.Guid>] [-Description <String>]
 [-BypassID <String>] [-CentralSite <String>] [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. A network region contains a collection of network sites. For example, if your organization has many sites located in Redmond, then you may choose to designate "Redmond" as a network region.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> New-CsTenantNetworkRegion -NetworkRegionID "RegionA"
```

The command shown in Example 1 created the network region 'RegionA' with no description. Identity and CentralSite will both be set identical with NetworkRegionID.

Previously in Skype for Business there was an additional required parameter `-CentralSite <site ID>`, however it is now optional.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> New-CsTenantNetworkRegion -NetworkRegionID "RegionRedmond" -Description "Redmond region" -CentralSite "Central site 1"
```

The command shown in Example 2 created the network region 'RegionRedmond' with description 'Redmond region'. CentralSite is set to "Central site 1".

## PARAMETERS

### -BypassID
Bypass ID was not required and not used in current commands.

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
Provide a description of the network region to identify purpose of creating it.

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
Unique identifier for the network region to be created.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
PARAMVALUE: SwitchParameter

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

### -NetworkRegionID
The name of the network region. This must be a string that is unique. You cannot specify an NetworkRegionID and an Identity at the same time.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
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

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
