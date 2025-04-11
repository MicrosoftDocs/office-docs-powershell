---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsunassignednumbertreatment
applicable: Microsoft Teams
title: New-CsTeamsUnassignedNumberTreatment
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
---

# New-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
Creates a new treatment for how calls to an unassigned number range should be routed. The call can be routed to a user, an application or to an announcement service where a custom message will be played to the caller.

## SYNTAX

### Identity (Default)
```
New-CsTeamsUnassignedNumberTreatment [-Identity] <string> [-Description <string>] [-Pattern <string>] [-Target <string>]
 [-TargetType <string>] [-TreatmentPriority <int>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTeamsUnassignedNumberTreatment -TreatmentId <string> [-Description <string>] [-Pattern <string>] [-Target <string>]
 [-TargetType <string>] [-TreatmentPriority <int>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
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
This example creates a treatment that will route all calls to unassigned numbers in the range +1 (555) 333-0000 to +1 (555) 333-9999 to the announcement service,
where the audio file MainAnnouncement.wav will be played to the caller.

### Example 3
```powershell
$UserObjectId = (Get-CsOnlineUser -Identity user@contoso.com).Identity
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
Parameter Sets: (Identity)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression that the called number must match in order for the treatment to take effect. It is best practice to start the regular expression with the hat character and end it with the dollar character.
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
Parameter Sets: (ParentAndRelativeKey)
Aliases:

Required: True
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

To route calls to unassigned Microsoft Calling Plan subscriber numbers, your tenant needs to have available Communications Credits.

To route calls to unassigned Microsoft Calling Plan service numbers, your tenant needs to have at least one Microsoft Teams Phone Resource Account license.

Both inbound calls to Microsoft Teams and outbound calls from Microsoft Teams will have the called number checked against the unassigned number range.

If a specified pattern/range contains phone numbers that are assigned to a user or resource account in the tenant, calls to these phone numbers will be routed to
the appropriate target and not routed to the specified unassigned number treatment. There are no other checks of the numbers in the range. If the range contains
a valid external phone number, outbound calls from Microsoft Teams to that phone number will be routed according to the treatment.

## RELATED LINKS
[Import-CsOnlineAudioFile](https://learn.microsoft.com/powershell/module/teams/import-csonlineaudiofile)

[Get-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/get-csteamsunassignednumbertreatment)

[Remove-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/remove-csteamsunassignednumbertreatment)

[Set-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/set-csteamsunassignednumbertreatment)

[Test-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/test-csteamsunassignednumbertreatment)
