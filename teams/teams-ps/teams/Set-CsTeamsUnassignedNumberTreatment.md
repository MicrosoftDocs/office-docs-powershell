---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/set-csteamsunassignednumbertreatment
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Set-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
Changes a treatment for how calls to an unassigned number range should be routed. The call can be routed to a user, an application or to an announcement service where a custom message will be played to the caller.

  
## SYNTAX

```powershell
Set-CsTeamsUnassignedNumberTreatment [[-Identity] <string>] [-Pattern <string>] [-TargetType <User | ResourceAccount | Announcement>] [-Target <GUID>] [-TreatmentPriority <integer>] [-Description <string>] [-Force] [-Instance <Object>] [-WhatIf]  [-Confirm] <CommonParameters>]
```

## DESCRIPTION
This cmdlet changes a treatment for how calls to an unassigned number range should be routed.

## EXAMPLES

### Example 1
```powershell
$RAObjectId = (Get-CsOnlineApplicationInstance -Identity aa2@contoso.com).ObjectId
Set-CsTeamsUnassignedNumberTreatment -Identity MainAA -Target $RAObjectId
```
This example changes the treatment MainAA to route the calls to the resource account aa2@contoso.com.

### Example 2
```powershell
$UserObjectId = (Get-CsOnlineUser -Identity user2@contoso.com).Identity
Set-CsTeamsUnassignedNumberTreatment -Identity User2PSTN -TargetType User -Target $UserObjectId
```
This example changes the treatment User2PSTN to route the calls to the user user2@contoso.com.


## PARAMETERS

### -Description
Free format description of this treatment.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Id of the specific treatment.


```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression that the called number must match in order for the treatment to take effect. It is best pratice to start the regular expression with the hat character and end it with the dollar character.
You can use various regular expression test sites on the Internet to validate the expression.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Target
The identity of the destination the call should be routed to. Depending on the TargetType it should either be the ObjectId of the user or application instance/resource account or the AudioFileId of the uploaded audio file.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetType
The type of target used for the treatment. Allowed values are User, ResourceAccount and Announcement.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatmentPriority
The priority of the treatment. Used to distinguish identical patterns. The lower the priority the higher preference. The priority needs to be unique.

```yaml
Type: System.Integer
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Object

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 2.5.1 or later.

## RELATED LINKS
[Import-CSOnlineAudioFile](https://docs.microsoft.com/powershell/module/skype/import-csonlineaudiofile)

[Get-CsTeamsUnassignedNumberTreatment](Get-CsTeamsUnassignedNumberTreatment.md)

[Remove-CsTeamsUnassignedNumberTreatment](Remove-CsTeamsUnassignedNumberTreatment.md)

[New-CsTeamsUnassignedNumberTreatment](New-CsTeamsUnassignedNumberTreatment.md)
