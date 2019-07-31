---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online 
title: New-CsTeamsEmergencyCallingPolicy
author:
ms.author:Danny Levin
ms.reviewer: 
schema: 2.0.0
---

# New-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

```
New-CsTeamsEmergencyCallingPolicy [-Tenant <System.Guid>] [-NotificationGroup <String>]
 [-NotificationDialOutNumber <String>] [-ExternalLocationLookupMode <ExternalLocationLookupMode>]
 [-NotificationMode <Microsoft.Rtc.Management.WritableConfig.Policy.Teams.NotificationMode>]
 [-Description <String>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
{{ This cmdlet creates new Teams Emergency Calling policy. Emergency calling policy is used for the life cycle of emergency calling experience for the security desk and Teams client location experience. }}

## EXAMPLES

### Example 1
```powershell
PS C:> {{  New-CsTeamsEmergencyCallingPolicy -Identity testECRP -Description "Test ECRP" -NotificationGroup "alert@ms.com" -NotificationDialOutNumber "4253214567" -NotificationMode NotificationOnly -ExternalLocationLookupMode $true }}
```

{{ This example creates a Teams Emergency Calling policy that has a identity of testECRP }}

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

### -Description
{{ The Description parameter describes the Teams Emergency Calling policy - what it's for, what type of user it applies to and any other information that helps to identify the purpose of this policy. Maximum characters: 512. }}

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

### -ExternalLocationLookupMode
{{ Enable ExternalLocationLookupMode }}

```yaml
Type: ExternalLocationLookupMode
Parameter Sets: (All)
Aliases:
Accepted values: Disabled, Enabled

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{ The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required. }}

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
{{ The Identity parameter is a unique identifier that designates the name of the policy }}

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
{{ The InMemory parameter creates an object reference without actually committing the object as a permanent change. }}

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

### -NotificationDialOutNumber
{{ This parameter represents PSTN number which can be dialed out if NotificationMode is set to either of the two Conference values }}

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

### -NotificationGroup
{{ NotificationGroup is a email list of users and groups to be notified of an emergency call }}

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

### -NotificationMode
{{ The type of conference experience for security desk notification}}

```yaml
Type: Microsoft.Rtc.Management.WritableConfig.Policy.Teams.NotificationMode
Parameter Sets: (All)
Aliases:
Accepted values: NotificationOnly, ConferenceMuted, ConferenceUnMuted

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{ Specify the tenant id}}

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
