---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/remove-csonlineliswirelessaccesspoint
applicable: Skype for Business Online
title: Remove-CsOnlineLisWirelessAccessPoint
schema: 2.0.0
author: junya
ms.author: junya
ms.reviewer:
---

# Remove-CsOnlineLisWirelessAccessPoint

## SYNOPSIS
Removes a Location Information Server (LIS) wireless access point (WAP).

## SYNTAX

```
Remove-CsOnlineLisWirelessAccessPoint [[-TenantId] <Guid>] [-BSSID] <String> [-IsDebug <Boolean>]
 [-TargetStore <String>] [-NCSApiUrl <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet removes a WAP from the location configuration database. Removing the WAP will not remove the location associated with that WAP. Use the \`Remove-CsLisOnlineLocation\` cmdlet to remove a location.

The BSSID (Basic Service Set Identifiers) is used to describe sections of a wireless local area network. It is the MAC of the 802.11 side of the access point. The BSSID parameter in this command is also supporting the wildcard format which is covering all BSSIDs in the range which are sharing the same description and Location ID. The wildcard can be one '*' on either the last one or two character(s).

If a BSSID with wildcard format is already existing, the request for removing a single BSSID which is within this wildcard range and with the same location ID will not be accepted.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsOnlineLisWirelessAccessPoint -BSSID 0B-23-CD-16-AA-CC
```

Example 1 removes the Location Information Server (LIS) wireless access point with BSS ID "0B-23-CD-16-AA-CC".

### -------------------------- Example 2 --------------------------
```
Remove-CsOnlineLisWirelessAccessPoint -BSSID 5C-AA-3D-87-CC-4*
```

Example 2 removes the Location Information Server (LIS) wireless access point with BSS ID "5C-AA-3D-87-CC-4*".

### -------------------------- Example 3 --------------------------
```
Remove-CsOnlineLisWirelessAccessPoint -BSSID DD-FF-BB-66-88-*
```

Example 3 removes the Location Information Server (LIS) wireless access point with BSS ID "DD-FF-BB-66-88-*".


## PARAMETERS

### -BSSID
The Basic Service Set Identifier (BSSID) of the wireless access point. This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab. If an entry with the specified BSSID value does not exist, a new WAP location will be created. If an entry with the specified BSSID does exist, that entry will be replaced. It can be presented in wildcard format. The wildcard can be one '*' on either the last one or two character(s).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: 1
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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDebug
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NCSApiUrl
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: 0
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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS


### System.Guid


### System.String


## OUTPUTS


### System.Object


## NOTES


## RELATED LINKS

