---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsPolicyPackage
author: serdarsoysal
ms.author: serdars
manager: amitar
online version: https://learn.microsoft.com/powershell/module/teams/get-cspolicypackage
schema: 2.0.0
---

# Get-CsPolicyPackage

## SYNOPSIS

This cmdlet supports retrieving all the policy packages available on a tenant.

## SYNTAX

```powershell
Get-CsPolicyPackage [[-Identity] <String>] -InputObject <IConfigApiBasedCmdletsIdentity> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving all the policy packages available on a tenant. Provide the identity of a specific policy package to retrieve its definition, including details on the policies applied with the package.
For more information on policy packages, please review https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsPolicyPackage
```

Returns all policy packages available on the tenant.

### Example 2
```powershell
PS C:\> Get-CsPolicyPackage -Identity Education_PrimaryStudent
```

Returns only the Education_PrimaryStudent policy package.

### Example 3
```powershell
PS C:\> $a = Get-CsPolicyPackage -Identity Education_PrimaryStudent
PS C:\> $a.Policies

# In module versions 1.1.9+
PS C:\> $a = Get-CsPolicyPackage -Identity Education_PrimaryStudent
PS C:\> $a.Policies.AdditionalProperties

Key                         Value
---                         -----
TeamsMessagingPolicy        {[Identity, Education_PrimaryStudent], [Description, This is an Education_PrimarySt...
TeamsMeetingPolicy          {[Identity, Education_PrimaryStudent], [Description, This is an Education_PrimarySt...
TeamsAppSetupPolicy         {[Identity, Education_PrimaryStudent], [Description, This is an Education_PrimarySt...
TeamsCallingPolicy          {[Identity, Education_PrimaryStudent], [Description, This is an Education_PrimarySt...
TeamsMeetingBroadcastPolicy {[Identity, Education_PrimaryStudent], [Description, This is an Education_PrimarySt...
```

Returns the set of policies in the Education_PrimaryStudent policy package.

## PARAMETERS

### -Identity

The name of a specific policy package. All possible policy package names can be found by running Get-CsPolicyPackage.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject

The identity parameter.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsUserPolicyPackageRecommendation](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackagerecommendation)

[Get-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackage)

[Grant-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/teams/grant-csuserpolicypackage)
