---
external help file: Set-CsOrganizationalAutoAttendant.xml
applicable: Skype for Business Online
title: Set-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Set-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the Set-CsOrganizationalAutoAttendant cmdlet to modify the properties of an existing Organizational Auto Attendant (OAA).

## SYNTAX

```
Set-CsOrganizationalAutoAttendant [-Instance] <Object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsOrganizationalAutoAttendant cmdlet lets you modify the properties of an organizational auto attendant. For example, you can change the phone number, the operator, the greeting, or the menu prompts.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$oaa = Get-CsOrganizationalAutoAttendant -PrimaryUri "sip:mainoaa@contoso.com"
$oaa.LineUris = [System.Uri] "tel:+##########"
Set-CsOrganizationalAutoAttendant -Instance $oaa
```

This example changes the telephone number for the OAA that has a Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 2 --------------------------
```
$oaa = Get-CsOrganizationalAutoAttendant -PrimaryUri "sip:mainoaa@contoso.com"

$christmasGreetingPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Our offices are closed for Christmas from December 24 to December 26. Please call back later."
$christmasMenuOption = New-CsOrganizationalAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic 
$christmasMenu = New-CsOrganizationalAutoAttendantMenu -Name "Christmas Menu" -MenuOptions @($christmasMenuOption)
$christmasCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Christmas" -Greetings @($christmasGreetingPrompt) -Menu $christmasMenu

$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$christmasSchedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr)

$christmasCallHandlingAssociation = New-CsOrganizationalAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $christmasSchedule.Id -CallFlowId $christmasCallFlow.Id

$oaa.CallFlows = $oaa.CallFlows + @($christmasCallFlow)
$oaa.Schedules = $oaa.Schedules + @($christmasSchedule)
$oaa.CallHandlingAssociations = $oaa.CallHandlingAssociations + @($christmasCallHandlingAssociation)

Set-CsOrganizationalAutoAttendant -Instance $oaa
```

This example adds a Christmas holiday to an OAA that a Primary URI of sip:mainoaa@contoso.com.

## PARAMETERS

### -Instance
The Instance parameter is the object reference to the OAA to be modified. 

You can retrieve an object reference to an existing OAA by using the Get-CsOrganizationalAutoAttendant cmdlet and assigning the returned value to a variable.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant
The Set-CsOrganizationalAutoAttendant cmdlet accepts a Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant object as the Instance parameter.


## OUTPUTS

### None
The Set-CsOrganizationalAutoAttendant cmdlet does not return any objects or values. Instead, the cmdlet modifies the instance of the Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant object that is passed in as the Instance parameter.


## NOTES

## RELATED LINKS

[New-CsOrganizationalAutoAttendant](New-CsOrganizationalAutoAttendant.md)

[Get-CsOrganizationalAutoAttendant](Get-CsOrganizationalAutoAttendant.md)
