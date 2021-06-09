---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-CsTeamsCallHoldPolicy
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
title: New-CsTeamsCallHoldPolicy
manager: abnair
author: joelhmarquez
ms.author: jomarque
ms.reviewer:
---

# New-CsTeamsCallHoldPolicy

## SYNOPSIS
Creates a new Teams call hold policy in your tenant.
The Teams call hold policy is used to customize the call hold experience for Teams clients.

## SYNTAX

```
New-CsTeamsCallHoldPolicy [-Tenant <System.Guid>] [-Description <String>] [-AudioFileId <String>]
 [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Teams call hold policies are used to customize the call hold experience for teams clients.
When Microsoft Teams users participate in calls, they have the ability to hold a call and have the other entity in the call listen to an audio file during the duration of the hold.
Assinging a teams call hold policy to a user sets an audio file to be played during the duration of the hold.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsCallHoldPolicy -Identity "ContosoPartnerTeamsCallHoldPolicy" -Description "country music" -AudioFileID "c65233-ac2a27-98701b-123ccc" 

```

The command shown in Example 1 creates a new, per-user Teams call hold policy with the Identity ContosoPartnerTeamsCallHoldPolicy.
This policy is assigned the audio file id: c65233-ac2a27-98701b-123ccc, which is the id referencing an audio file that was uploaded using the Import-CsOnlineAudioFile cmdlet.

Any Microsoft Teams users who are assigned this policy will have their call holds customized such that the user being held will hear the audio file specified by AudioFileId.

## PARAMETERS

### -AudioFileId
The GUID referencing an audio file uploaded via the Import-CsTeamsOnlineAudio cmdlet.

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

### -Description
Enables administrators to provide explanatory text to accompany a Teams call hold policy.
For example, the Description might include information about the users the policy should be assigned to.

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
Unique identifier to be assigned to the new Teams call hold policy.

Use the "Global" Identity if you wish to assign this policy to the entire tenant.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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
Globally unique identifier (GUID) of the tenant account whose Teams compliance recording policies are being queried.
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[get-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamscallholdpolicy?view=skype-ps)

[Set-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/set-csteamscallholdpolicy?view=skype-ps)

[Grant-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csteamscallholdpolicy?view=skype-ps)

[Remove-CsTeamsCallHoldPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csteamscallholdpolicy?view=skype-ps)

[Import-CsOnlineAudioFile](https://docs.microsoft.com/powershell/module/skype/import-csonlineaudiofile?view=skype-ps)
