---
external help file: 
applicable: Skype for Business Online
title: Get-CsTeamsGuestMessagingConfiguration
schema: 2.0.0
---

# Get-CsTeamsGuestMessagingConfiguration

## SYNOPSIS
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.  This cmdlet returns your organization's current settings.

Get-CsTeamsGuestMessagingConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[\<CommonParameters\>\]

Get-CsTeamsGuestMessagingConfiguration \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsTeamsGuestMessagingConfiguration [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>]
 [-Filter <Object>] [-AsJob]
```

## DESCRIPTION
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.

## EXAMPLES

### Example 1
```
Get-CsTeamsGuestMessagingConfiguration
```

The command shown in Example 1 returns teams guest messaging configuration information for the current tenant

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection of tenant guest messaging configuration settings.
Because each tenant is limited to a single, global collection of guest messaging configuration settings there is no need to use the Filter parameter.

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
Specifies the collection of tenant guest messaging configuration settings to be returned.
Because each tenant is limited to a single, global collection of guest messaging settings there is no need include this parameter when calling the cmdlet.
If you do choose to use the Identity parameter you must also include the Tenant parameter.

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
This parameter is not used with Skype for Business Online.

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
