---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamssurvivablebranchappliancepolicy
schema: 2.0.0
title: Grant-CsTeamsSurvivableBranchAppliancePolicy
---

# Grant-CsTeamsSurvivableBranchAppliancePolicy

## SYNOPSIS
Grants a Survivable Branch Appliance (SBA) Policy to users in the tenant.

## SYNTAX

### Identity (Default)

```powershell
Grant-CsTeamsSurvivableBranchAppliancePolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant

```powershell
Grant-CsTeamsSurvivableBranchAppliancePolicy [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup

```powershell
Grant-CsTeamsSurvivableBranchAppliancePolicy [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-Group] <String> [-Rank <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The Survivable Branch Appliance (SBA) Policy cmdlets facilitate the continuation of Teams Phone operations, allowing for the placement and reception of Public Switched Telephone Network (PSTN) calls during service disruptions. These cmdlets are exclusively intended for Tenant Administrators and Session Border Controller (SBC) Vendors. In the absence of SBA configuration within a Tenant, the cmdlets will be inoperative.

## PARAMETERS

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

### -Global

When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant. To skip a warning when you do this operation, specify "-Global".

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group

Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity of the user.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -MsftInternalProcessingMode

For internal use only.

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

### -PassThru

Enables you to pass a user object through the pipeline that represents the user account being assigned the policy.

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

### -PolicyName

Name of the policy to be assigned. The PolicyName is simply the policy Identity without the policy scope, i.e. the "Tag:" prefix.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank

The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
