---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csonlineliswirelessaccesspoint
applicable: Skype for Business Online
title: Set-CsOnlineLisWirelessAccessPoint
schema: 2.0.0
author: junya
ms.author: junya
ms.reviewer:
---

# Set-CsOnlineLisWirelessAccessPoint

## SYNOPSIS
Creates a Location Information Server (LIS) wireless access point (WAP), creates an association between a WAP and a location (creating a new location if that location doesn't exist), or modifies an existing WAP and its associated location. The association between a WAP and location is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Set-CsOnlineLisWirelessAccessPoint [[-TenantId] <Guid>] [-BSSID] <String> -LocationId <Guid>
 [-Description <String>] [-IsDebug <Boolean>] [-TargetStore <String>] [-NCSApiUrl <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet allows the administrator to map physical locations to the WAP through which calls will be routed.

The BSSID (Basic Service Set Identifiers) is used to describe sections of a wireless local area network. It is the MAC of the 802.11 side of the access point. The BSSID in this command is also supporting the wildcard format which is covering all BSSIDs in the range which are sharing the same description and Location ID. The wildcard can be one '*' on either the last one or two character(s).

If a BSSID with wildcard format is already existing, the request for adding one more new BSSID which is within this wildcard range and with the same location ID will not be accepted.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineLisWirelessAccessPoint -BSSID 0B-23-CD-16-AA-CC -Description "LIS WAP with BSS ID 0B-23-CD-16-AA-CC" -LocationId d26a4935-5997-4bcf-b0db-6ae5a88805fd
```

Example 1 creates the Location Information Server (LIS) wireless access point with Chassis ID "0B-23-CD-16-AA-CC", associated with location ID d26a4935-5997-4bcf-b0db-6ae5a88805fd.

### -------------------------- Example 2 --------------------------
```
Set-CsOnlineLisWirelessAccessPoint -BSSID 00-22-C4-17-BB-A* -Description "LIS WAP with BSS ID 00-22-C4-17-BB-A*" -LocationId ca5c581e-5006-499a-a5b3-cd8c2384cc9a
```

Example 2 creates the Location Information Server (LIS) wireless access point with Chassis ID "00-22-C4-17-BB-A*", associated with location ID ca5c581e-5006-499a-a5b3-cd8c2384cc9a. BSSID "00-22-C4-17-BB-A*" is in wildcard format so it equivalents to adding all BSSIDs with the same LocationID in the range "00-22-C4-17-BB-A[0-9A-F]]"

### -------------------------- Example 3 --------------------------
```
Set-CsOnlineLisWirelessAccessPoint -BSSID 0F-27-5B-C7-FF-* -Description "LIS WAP with BSS ID 0F-27-5B-C7-FF-*" -LocationId 4d7357dd-7078-4907-8dfa-658c1811f109
```

Example 3 creates the Location Information Server (LIS) wireless access point with Chassis ID "0F-27-5B-C7-FF-*", associated with location ID 4d7357dd-7078-4907-8dfa-658c1811f109. BSSID "0F-27-5B-C7-FF-*" is in wildcard format so it equivalents to adding all BSSIDs with the same LocationID in the range "00-22-C4-17-BB-[0-9A-F][0-9A-F]]"


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

### -Description
Specifies the administrator defined description of the WAP.

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

### -LocationId
The name for this location.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
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

