---
external help file: 
applicable: Skype for Business Online
title: Get-CsTeamsMessagingPolicy
schema: 2.0.0
---

# Get-CsTeamsMessagingPolicy

## SYNOPSIS
Get-CsTeamsMessagingPolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[\<CommonParameters\>\]

Get-CsTeamsMessagingPolicy \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsTeamsMessagingPolicy [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION
Retrieves a Teams messaging policy.

## EXAMPLES

### Example 1
For in depth examples of how to customize retrieving messaging policies, look at the examples provided for the Get-CsConferencingPolicy cmdlet.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when specifying the policy (or policies) to be returned.

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
Unique identifier for the policy to be retrieved. To retrieve the global policy, use this syntax: -Identity global. To retrieve a per-user policy use syntax similar to this: -Identity StudentMessagingPolicy.

If this parameter is not included, the Get-CsTeamsMessagingPolicy cmdlet will return a collection of all the teams messaging policies configured for use in your organization.

Note that wildcards are not allowed when specifying an Identity. Use the Filter parameter if you need to use wildcards when specifying a messaging policy.

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
