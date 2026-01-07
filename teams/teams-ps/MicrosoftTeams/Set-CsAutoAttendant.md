---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant
schema: 2.0.0
title: Set-CsAutoAttendant
---

# Set-CsAutoAttendant

## SYNOPSIS
Use the Set-CsAutoAttendant cmdlet to modify the properties of an existing Auto Attendant (AA).

## SYNTAX

```powershell
Set-CsAutoAttendant -Instance <Object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsAutoAttendant cmdlet lets you modify the properties of an auto attendant. For example, you can change the operator, the greeting, or the menu prompts.

## EXAMPLES

### Example 1
```powershell
$autoAttendant = Get-CsAutoAttendant -Identity "fa9081d6-b4f3-5c96-baec-0b00077709e5"

$christmasGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Our offices are closed for Christmas from December 24 to December 26. Please call back later."
$christmasMenuOption = New-CsAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic
$christmasMenu = New-CsAutoAttendantMenu -Name "Christmas Menu" -MenuOptions @($christmasMenuOption)
$christmasCallFlow = New-CsAutoAttendantCallFlow -Name "Christmas" -Greetings @($christmasGreetingPrompt) -Menu $christmasMenu

$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$christmasSchedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr)

$christmasCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $christmasSchedule.Id -CallFlowId $christmasCallFlow.Id

$autoAttendant.CallFlows += @($christmasCallFlow)
$autoAttendant.CallHandlingAssociations += @($christmasCallHandlingAssociation)

Set-CsAutoAttendant -Instance $autoAttendant
```

This example adds a Christmas holiday to an AA that has an Identity of fa9081d6-b4f3-5c96-baec-0b00077709e5.

### Example 2
```powershell
$autoAttendant = Get-CsAutoAttendant -Identity "fa9081d6-b4f3-5c96-baec-0b00077709e5"

$autoAttendant.CallFlows

# Id        : e68dfc2f-587b-42ee-98c7-b9c9ebd46fd1
# Name      : After hours
# Greetings :
# Menu      : After Hours Menu

# Id        : 8ab460f0-770c-4d30-a2ff-a6469718844f
# Name      : Christmas CallFlow
# Greetings :
# Menu      : Christmas Menu

$autoAttendant.CallFlows[1].Greetings

# ActiveType         : TextToSpeech
# TextToSpeechPrompt : We are closed for Christmas. Please call back later.
# AudioFilePrompt    :

$christmasGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Our offices are closed for Christmas from December 24 to December 26. Please call back later."
$autoAttendant.CallFlows[1].Greetings = @($christmasGreetingPrompt)

Set-CsAutoAttendant -Instance $autoAttendant
```

This example modifies the Christmas holiday greeting for the AA that has an Identity of fa9081d6-b4f3-5c96-baec-0b00077709e5.

### Example 3
```powershell
$autoAttendant = Get-CsAutoAttendant -Identity "fa9081d6-b4f3-5c96-baec-0b00077709e5"
$autoAttendant.CallHandlingAssociations

# Type       : Holiday
# ScheduleId : 578745b2-1f94-4a38-844c-6bf6996463ee
# CallFlowId : a661e694-e2df-4aaa-a183-67bf819c3cac
# Enabled    : True

# Type       : AfterHours
# ScheduleId : c2f160ca-119d-55d8-818c-def2bcb85515
# CallFlowId : e7dd255b-ee20-57f0-8a2b-fc403321e284
# Enabled    : True

$autoAttendant.CallHandlingAssociations = $autoAttendant.CallHandlingAssociations | where-object {$_.ScheduleId -ne "578745b2-1f94-4a38-844c-6bf6996463ee"}

$autoAttendant.CallFlows

# Id        : e68dfc2f-587b-42ee-98c7-b9c9ebd46fd1
# Name      : After hours
# Greetings :
# Menu      : After Hours Menu

# Id        : 8ab460f0-770c-4d30-a2ff-a6469718844f
# Name      : Christmas CallFlow
# Greetings :
# Menu      : Christmas Menu

$autoAttendant.CallFlows = $autoAttendant.CallFlows | where-object {$_.Id -ne "8ab460f0-770c-4d30-a2ff-a6469718844f"}

Set-CsAutoAttendant -Instance $autoAttendant
```

This example modifies an existing AA, removing the Christmas holiday call handling. We removed the call handling association for Christmas holiday, along with the related call flow.

## PARAMETERS

### -Instance

The Instance parameter is the object reference to the AA to be modified.

You can retrieve an object reference to an existing AA by using the Get-CsAutoAttendant cmdlet and assigning the returned value to a variable.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Tenant

This parameter is reserved for Microsoft internal use only.

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

### CommonParameters

This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable`. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.AutoAttendant
The Set-CsAutoAttendant cmdlet accepts a `Microsoft.Rtc.Management.Hosted.OAA.Models.AutoAttendant` object as the Instance parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.AutoAttendant
The modified instance of the `Microsoft.Rtc.Management.Hosted.OAA.Models.AutoAttendant` object.

## NOTES

## RELATED LINKS

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Get-CsAutoAttendantStatus](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendantstatus)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant)

[Update-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/update-csautoattendant)
