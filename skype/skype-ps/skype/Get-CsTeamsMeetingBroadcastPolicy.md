---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Set-CsTeamsMeetingBroadcastPolicy
schema: 2.0.0
---


# Get-CsTeamsMeetingBroadcastPolicy

## SYNOPSIS
Get-CsTeamsMeetingBroadcastPolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[\<CommonParameters\>\]

Get-CsTeamsMeetingBroadcastPolicy \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsTeamsMeetingBroadcastPolicy [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>]
 [-AsJob]
```

## DESCRIPTION
User-level policy for tenant admin to configure meeting broadcast behavior for the broadcast event organizer.  Use this cmdlet to retrieve one or more policies.

## EXAMPLES


## PARAMETERS

### -Filter
Enables you to use wildcard characters when specifying the policy (or policies) to be returned. For example, this syntax returns all the policies configured at the per-user scope

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
Unique identifier for the policy to be retrieved. Policies can be configured at the global scope or at the per-user scope. To retrieve the global policy, use this syntax: -Identity global. To retrieve a per-user policy use syntax similar to this: -Identity SalesPolicy.

If this parameter is not included, the cmdlet will return a collection of all the policies configured for use in your organization.

Note that wildcards are not allowed when specifying an Identity. Use the Filter parameter if you need to use wildcards when specifying a policy.

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
Not applicable to the online service.

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
Not applicable to online service.

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
