---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csonlineaudioconferencingroutingpolicy
schema: 2.0.0
---

# Grant-CsOnlineAudioConferencingRoutingPolicy

## SYNOPSIS

This cmdlet applies an instance of the Online Audio Conferencing Routing policy to users or groups in a tenant.

## SYNTAX

### Identity (Default)

```powershell
Grant-CsOnlineAudioConferencingRoutingPolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant

```powershell
Grant-CsOnlineAudioConferencingRoutingPolicy [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup

```powershell
Grant-CsOnlineAudioConferencingRoutingPolicy [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-Group] <String> [-Rank <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

Teams meeting dial-out calls are initiated from within a meeting in your organization to PSTN numbers, including call-me-at calls and calls to bring new participants to a meeting.

To enable Teams meeting dial-out routing through Direct Routing to on-network users, you need to create and assign an Audio Conferencing routing policy called "OnlineAudioConferencingRoutingPolicy."

The OnlineAudioConferencingRoutingPolicy policy is equivalent to the CsOnlineVoiceRoutingPolicy for 1:1 PSTN calls via Direct Routing.

Audio Conferencing voice routing policies determine the available routes for calls from meeting dial-out based on the destination number. Audio Conferencing voice routing policies link to PSTN usages, determining routes for meeting dial-out calls by associated organizers.

## EXAMPLES

### Example 1

```powershell
PS C:\> Grant-CsOnlineAudioConferencingRoutingPolicy -PolicyName Test -Identity testuser@test.onmicrosoft.com
```

Applies the policy "test" to the user "<testuser@test.onmicrosoft.com>".

### Example 2

```powershell
PS C:\> Grant-CsOnlineAudioConferencingRoutingPolicy -PolicyName Test -Identity Global
```

Applies the policy "test" to the entire tenant.

### Example 3

```powershell
PS C:\> Grant-CsOnlineAudioConferencingRoutingPolicy  -Group f13d6c9d-ce76-422c-af78-b6018b4d9c80 -PolicyName Test 
```

Applies the policy "test" to the specified group.

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

This can be used to apply the policy to the entire tenant.

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

This is the identifier of the group that the policy should be assigned to.

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

Specifies the identity of the target user.

Example: <testuser@test.onmicrosoft.com>

Example: 98403f08-577c-46dd-851a-f0460a13b03d

Use the "Global" Identity if you wish to set the policy for the entire tenant.

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

Enables you to pass a user object through the pipeline that represents the user being assigned the policy.

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

Specifies the name of the policy to be assigned. The PolicyName is the policy identity minus the policy scope ("tag:"), for example, a policy that has an identity of "Tag:Enabled" has a PolicyName of "Enabled".

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

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsOnlineAudioConferencingRoutingPolicy](New-CsOnlineAudioConferencingRoutingPolicy.md)
[Remove-CsOnlineAudioConferencingRoutingPolicy](Remove-CsOnlineAudioConferencingRoutingPolicy.md)
[Set-CsOnlineAudioConferencingRoutingPolicy](Set-CsOnlineAudioConferencingRoutingPolicy.md)
[Get-CsOnlineAudioConferencingRoutingPolicy](Get-CsOnlineAudioConferencingRoutingPolicy.md)
