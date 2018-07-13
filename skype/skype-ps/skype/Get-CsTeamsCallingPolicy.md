---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTeamsCallingPolicy
schema: 2.0.0
---

# Get-CsTeamsCallingPolicy

## SYNOPSIS

Returns information about the teams calling policies configured for use in your organization.
Teams calling policies help determine which users are able to use calling functionality within Microsoft Teams.

## SYNTAX

```
Get-CsTeamsCallingPolicy [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION

Returns information about the teams calling policies configured for use in your organization.
Teams calling policies help determine which users are able to use calling functionality within Microsoft Teams and interoperability with Skype for Business.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsCallingPolicy -Identity SalesCallingPolicy
```

Retrieves the calling policy with name "SalesCallingPolicy"

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

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
Specify the TeamsCallingPolicy that you would like to retrieve.

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
Microsoft internal use.

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
Microsoft internal use.

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
