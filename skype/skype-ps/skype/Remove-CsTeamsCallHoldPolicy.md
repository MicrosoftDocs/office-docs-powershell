---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/remove-CsTeamsCallHoldPolicy
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
title: Remove-CsTeamsCallHoldPolicy
manager: abnair
author: joelhmarquez
ms.author: jomarque
ms.reviewer:
---

# Remove-CsTeamsCallHoldPolicy

## SYNOPSIS
Deletes an existing Teams call hold policy in your tenant.
The Teams call hold policy is used to customize the call hold experience for Teams clients.

## SYNTAX

```
Remove-CsTeamsCallHoldPolicy [-Tenant <System.Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Teams call hold policies are used to customize the call hold experience for teams clients.
When Microsoft Teams users participate in calls, they have the ability to hold a call and have the other entity in the call listen to an audio file during the duration of the hold.
Assinging a teams call hold policy to a user sets an audio file to be played during the duration of the hold.

## EXAMPLES

### Example 1

```powershell
PS C:\> Remove-CsTeamsCallHoldPolicy -Identity 'ContosoPartnerTeamsCallHoldPolicy'
```

The command shown in Example 1 deletes the Teams call hold policy ContosoPartnerTeamsCallHoldPolicy.

### Example 2
```powershell
PS C:\> Get-CsTeamsCallHoldPolicy -Filter 'Tag:*' | Remove-CsTeamsCallHoldPolicy
```

In Example 2, all the Teams call hold policies configured at the per-user scope are removed.
The Filter value "Tag:*" limits the returned data to Teams call hold policies configured at the per-user scope. Those per-user policies are then removed.

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
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Unique identifier assigned to the Teams call hold policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose Teams call hold policies are being queried.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a tenant remote session of Windows PowerShell you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

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

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[new-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/new-csteamscallholdpolicy?view=skype-ps)

[get-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamscallholdpolicy?view=skype-ps)

[Set-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/set-csteamscallholdpolicy?view=skype-ps)

[Grant-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csteamscallholdpolicy?view=skype-ps)
