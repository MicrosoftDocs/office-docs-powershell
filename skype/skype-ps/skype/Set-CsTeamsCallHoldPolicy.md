---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csteamscallholdpolicy
applicable: Microsoft Teams
title: Set-CsTeamsCallHoldPolicy
schema: 2.0.0
ms.reviewer:
manager: abnair
ms.author: jomarque
author: joelhmarquez
---

# Set-CsTeamsCallHoldPolicy

## SYNOPSIS

Modifies an existing Teams call hold policy in your tenant. The Teams call hold policy is used to customize the call hold experience for Teams clients.


## SYNTAX

### Identity (Default)
```
Set-CsTeamsCallHoldPolicy [-Tenant <System.Guid>] [-Description <String>] [-AudioFileId <String>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsCallHoldPolicy [-Tenant <System.Guid>] [-Description <String>] [-AudioFileId <String>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Teams call hold policies are used to customize the call hold experience for teams clients.

When Microsoft Teams users participate in calls, they have the ability to hold a call and have the other entity in the call listen to an audio file during the duration of the hold.

Assigning a Teams call hold policy to a user sets an audio file to be played during the duration of the hold.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-TeamsCallHoldPolicy -Identity "ContosoPartnerTeamsCallHoldPolicy" -AudioFileID "c65233-ac2a27-98701b-123ccc" 
```

The command shown in Example 1 modifies an existing per-user Teams call hold policy with the Identity ContosoPartnerTeamsCallHoldPolicy.

This policy is re-assigned the audio file ID to be used to: c65233-ac2a27-98701b-123ccc, which is the ID referencing an audio file that was uploaded using the Import-CsOnlineAudioFile cmdlet.

Any Microsoft Teams users who are assigned this policy will have their call holds customized such that the user being held will hear the audio file specified by AudioFileId.

### Example 2
```powershell
PS C:\> Set-TeamsCallHoldPolicy -Identity "ContosoPartnerTeamsCallHoldPolicy" -Description "country music" 
```

The command shown in Example 2 modifies an existing per-user Teams call hold policy with the Identity ContosoPartnerTeamsCallHoldPolicy.

This policy is re-assigned the description from its existing value to "country music".

## PARAMETERS

### -AudioFileId
A string representing the ID referencing an audio file uploaded via the Import-CsOnlineAudioFile cmdlet.

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
Unique identifier assigned to the Teams call hold policy.

Use the "Global" Identity if you wish modify the policy set for the entire tenant.

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsCallHoldPolicy](Get-CsTeamsCallHoldPolicy.md)

[New-CsTeamsCallHoldPolicy](New-CsTeamsCallHoldPolicy.md)

[Grant-CsTeamsCallHoldPolicy](Grant-CsTeamsCallHoldPolicy.md)

[Remove-CsTeamsCallHoldPolicy](Remove-CsTeamsCallHoldPolicy.md)

[Import-CsOnlineAudioFile](Import-CsOnlineAudioFile.md)
