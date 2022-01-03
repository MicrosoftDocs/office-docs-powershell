---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/new-csteamsunassignednumbertreatment
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# New-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
Creates a new treatment for how calls to an unassigned number range should be routed. The call can be routed to a user, an application or to an announcement service where a custom message will be played to the caller.

  
## SYNTAX

```powershell
New-CsTeamsUnassignedNumberTreatment [[-Identity] <String>] [-Pattern <string>] [-TargetType <User | ResourceAccount | Announcement>] [-Target <GUID>] [-TreatmentPriority <integer>] [-Description <string>] [-InMemory] [-TreatmentId <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a treatment for how calls to an unassigned number range should be routed.

## EXAMPLES

### Example 1
```powershell
$RAObjectId = (Get-CsOnlineApplicationInstance -Identity aa@contoso.com).ObjectId
New-CsTeamsUnassignedNumberTreatment -Identity MainAA -Pattern "^\+15552223333$" -TargetType ResourceAccount -Target $RAObjectId -TreatmentPriority 1
```
This example creates a treatment that will route all calls to the number +1 (555) 222-3333 to the resource account aa@contoso.com.
That resource account is associated with an Auto Attendant (not part of the example).

### Example 2
```powershell
$Content = Get-Content "C:\Media\MainAnnoucement.wav" -Encoding byte -ReadCount 0
$AudioFile = Import-CsOnlineAudioFile -FileName "MainAnnouncement.wav" -Content $Content
$Fid=[System.Guid]::Parse($audioFile.Id)
New-CsTeamsUnassignedNumberTreatment -Identity TR1 -Pattern "^\+1555333\d{4}$" -TargetType Announcement -Target $Fid.Guid -TreatmentPriority 2
```
This example creates a treatment that will route all calls to the number range +1 (555) 333-0000 to +1 (555) 333-9999 to the announcement service,
where the audio file MainAnnouncement.wav will be played to the caller.


### Example 3
```powershell
$UserObjectId = (Get-CsOnlineUser -Identity user@contoso.com).ObjectId
New-CsTeamsUnassignedNumberTreatment -Identity TR2 -Pattern "^\+15552224444$" -TargetType User -Target $UserObjectId -TreatmentPriority 3
```
This example creates a treatment that will route all calls to the number +1 (555) 222-4444 to the user user@contoso.com.


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
The Id of the treatment.


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

Required: True
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

Required: True
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

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatmentId
The identity of the treatment.

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

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 2.5.1 or later.

The parameters Identity and TreatmentId are mutually exclusive.

## RELATED LINKS
[Import-CSOnlineAudioFile](https://docs.microsoft.com/powershell/module/skype/import-csonlineaudiofile)

[Get-CsTeamsUnassignedNumberTreatment](Get-CsTeamsUnassignedNumberTreatment.md)

[Remove-CsTeamsUnassignedNumberTreatment](Remove-CsTeamsUnassignedNumberTreatment.md)

[Set-CsTeamsUnassignedNumberTreatment](Set-CsTeamsUnassignedNumberTreatment.md)
