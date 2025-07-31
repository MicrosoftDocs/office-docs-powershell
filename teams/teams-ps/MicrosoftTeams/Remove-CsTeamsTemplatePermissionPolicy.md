---
author: yishuaihuang4
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: weiliu2
Module Name: MicrosoftTeams
ms.author: yishuaihuang
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamstemplatepermissionpolicy
schema: 2.0.0
title: Remove-CsTeamsTemplatePermissionPolicy
---

# Remove-CsTeamsTemplatePermissionPolicy

## SYNOPSIS
Deletes an instance of TeamsTemplatePermissionPolicy.

## SYNTAX

```
Remove-CsTeamsTemplatePermissionPolicy [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes an instance of TeamsTemplatePermissionPolicy. The `Identity` parameter accepts the identity of the policy instance to delete.

## EXAMPLES

### Example 1
```powershell
PS >Remove-CsTeamsTemplatePermissionPolicy -Identity Foobar
```

Deletes a policy instance with the Identity *Foobar*.

### Example 2
```powershell
PS >Remove-CsTeamsTemplatePermissionPolicy -Identity Foobar
```

```output
Remove-CsTeamsTemplatePermissionPolicy : The policy "Foobar" is currently assigned to one or more users or groups. Ensure policy is not assigned before removing. Please refer to documentation. CorrelationId: 8622aac5-00c3-4071-b6d0-d070db8f663f
At line:1 char:1
+ Remove-CsTeamsTemplatePermissionPolicy -Identity Foobar ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [Remove-CsTeamsTemplatePermissionPolicy], PolicyRpException
    + FullyQualifiedErrorId : ClientError,Microsoft.Teams.Policy.Administration.Cmdlets.Core.RemoveTeamsTemplatePermissionPolicyCmdlet
```

Attempting to delete a policy instance that is currently assigned to users will result in an error. Remove the assignment before attempting to delete it.

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

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -Identity
Name of the policy instance to be deleted.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Void

## NOTES

## RELATED LINKS
[Get-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamstemplatepermissionpolicy)

[New-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamstemplatepermissionpolicy)

[Set-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamstemplatepermissionpolicy)
