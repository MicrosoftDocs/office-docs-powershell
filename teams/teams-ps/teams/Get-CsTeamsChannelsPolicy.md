---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamschannelspolicy
applicable: Microsoft Teams
title: Get-CsTeamsChannelsPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsTeamsChannelsPolicy

## SYNOPSIS

The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsChannelsPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <System.Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsChannelsPolicy [-Filter <String>] [-LocalStore] [-Tenant <System.Guid>] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.  The Get-CsTeamsChannelsPolicy returns policies that are available for use within your organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsChannelsPolicy
```

Retrieves all policies related to Teams & Channels that are available in your organization.

## PARAMETERS

### -Identity
Specify the unique name of a policy you would like to retrieve. Use one of the following values:

- `Global`
- The name of a custom policy you've created. If the value contains spaces, enclose the value in quotation marks ("). Note that the Identity value shows as `Tag:<Name>`, but the `<Name>` value also works.
- `Default`: This is a template that's used to populate the default property values when you create a new policy or to reset the property values in the global policy in case you delete it. Note that the Identity value shows as `Tag:Default`, but the `Default` value also works.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned. For example, to return a collection of all the per-user policies, use this syntax: -Filter "tag:".

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Internal Microsoft use only.

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
Internal Microsoft use only.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
