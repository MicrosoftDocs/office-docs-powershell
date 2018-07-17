---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version:
applicable: Skype for Business Online
title: Get-CsTeamsMeetingBroadcastConfiguration
schema: 2.0.0
---

# Get-CsTeamsMeetingBroadcastConfiguration

## SYNOPSIS
Get-CsTeamsMeetingBroadcastConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-ExposeSDNConfigurationJsonBlob \<bool\>\] \[-LocalStore\] \[\<CommonParameters\>\]

Get-CsTeamsMeetingBroadcastConfiguration \[-Tenant \<guid\>\] \[-ExposeSDNConfigurationJsonBlob \<bool\>\] \[-Filter \<string\>\] \[-LocalStore\] \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsTeamsMeetingBroadcastConfiguration [-ExposeSDNConfigurationJsonBlob <Object>] [-LocalStore]
 [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION
Tenant level configuration for broadcast events in Teams

## EXAMPLES

## PARAMETERS

### -ExposeSDNConfigurationJsonBlob
Extract SDN properties as a Json Blob in get.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Not applicable to online service - you can only have one configuration.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
You can only have one configuration - "Global"

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Not applicable to online service.

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

### -Tenant
Not applicable to online service

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Not applicable to online service.

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

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
