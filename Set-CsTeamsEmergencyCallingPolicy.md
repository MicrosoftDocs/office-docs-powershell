---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online 
title: Set-CsTeamsEmergencyCallingPolicy
author:
ms.author:Danny Levin
ms.reviewer: 
schema: 2.0.0
---

# Set-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

### Identity (Default)
```
Set-CsTeamsEmergencyCallingPolicy [-Tenant <System.Guid>] [-NotificationGroup <String>]
 [-NotificationDialOutNumber <String>] [-ExternalLocationLookupMode <ExternalLocationLookupMode>]
 [-NotificationMode <Microsoft.Rtc.Management.WritableConfig.Policy.Teams.NotificationMode>]
 [-Description <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsEmergencyCallingPolicy [-Tenant <System.Guid>] [-NotificationGroup <String>]
 [-NotificationDialOutNumber <String>] [-ExternalLocationLookupMode <ExternalLocationLookupMode>]
 [-NotificationMode <Microsoft.Rtc.Management.WritableConfig.Policy.Teams.NotificationMode>]
 [-Description <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
{{ This cmdlet modifies an existing Teams Emergency Calling policy. Emergency calling policy is used for the life cycle of emergency calling experience for the security desk and Teams client location experience.}}

## EXAMPLES

### Example 1
```powershell
PS C:> {{ Set-CsTeamsEmergencyCallingPolicy -Identity "testECP" -NotificationGroup "123@gh.com;567@test.com" }}
```

{{ This example modifies a existing cmdlet with identity testECP. }}

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
{{ Provide a description of the Teams Emergency Calling policy to identify purpose of setting it. }}

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
{{ The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.  }}

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
{{ The Identity parameter is a unique identifier that designates the name of the policy  }}

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
{{ The Instance parameter allows you to pass a reference to an object to the cmdlet, rather than set individual parameter values. You can retrieve this object reference by calling the Get-CsTeamsEmergencyCallingPolicy cmdlet. }}

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
{{ NotificationGroup is a email list of users and groups to be notified of an emergency call}}

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
{{ The type of conference experience for security desk notification }}

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
{{ Specify the tenant id }}

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
