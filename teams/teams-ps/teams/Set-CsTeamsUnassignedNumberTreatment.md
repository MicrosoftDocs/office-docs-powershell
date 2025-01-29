---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsunassignednumbertreatment
applicable: Microsoft Teams
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
schema: 2.0.0
---

# Set-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
Changes a treatment for how calls to an unassigned number range should be routed. The call can be routed to a user, an application or to an announcement service where a custom message will be played to the caller.

## SYNTAX

```
Set-CsTeamsUnassignedNumberTreatment [[-Identity] <string>] [-Description <string>] [-Pattern <string>] [-Target <string>] [-TargetType <string>]
 [-TreatmentPriority <int>] [-WhatIf] [-Confirm] [<CommonParameters>]
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
Position: 1
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Object

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 2.5.1 or later.

Both inbound calls to Microsoft Teams and outbound calls from Microsoft Teams will have the called number checked against the unassigned number range.

To route calls to unassigned Microsoft Calling Plan subscriber numbers, your tenant needs to have available Communications Credits.

To route calls to unassigned Microsoft Calling Plan service numbers, your tenant needs to have at least one Microsoft Teams Phone Resource Account license.

If a specified pattern/range contains phone numbers that are assigned to a user or resource account in the tenant, calls to these phone numbers will be routed to
the appropriate target and not routed to the specified unassigned number treatment. There are no other checks of the numbers in the range. If the range contains
a valid external phone number, outbound calls from Microsoft Teams to that phone number will be routed according to the treatment.

## RELATED LINKS
[Import-CsOnlineAudioFile](https://learn.microsoft.com/powershell/module/teams/import-csonlineaudiofile)

[Get-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/get-csteamsunassignednumbertreatment)

[Remove-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/remove-csteamsunassignednumbertreatment)

[New-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/new-csteamsunassignednumbertreatment)

[Test-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/test-csteamsunassignednumbertreatment)
