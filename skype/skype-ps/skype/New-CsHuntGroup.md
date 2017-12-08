---
external help file: New-CsHuntGroup.xml
applicable: Skype for Business Online
title: New-CsHuntGroup
schema: 2.0.0
---

# New-CsHuntGroup

## SYNOPSIS
Creates new Call Queue in your Skype for Business Online organization. Call Queues are part of Phone System in Office 365.

## SYNTAX

```
New-CsHuntGroup -Domain <System.String> -Name <System.String> [-AgentAlertTime <Int16>] [-AllowOptOut <System.Boolean>] [-DistributionLists <System.Collections>]
 [-LineUri <System.Uri>] [-MusicOnHoldFileContent <System.Byte[]>] [-MusicOnHoldFileName <System.String>] [-OverflowAction <Microsoft.Rtc.Management.Hosted.HuntGroup.Models.OverflowAction>]
 [-OverflowActionTarget <System.Uri>] [-OverflowThreshold <Int16>] [-RoutingMethod <Microsoft.Rtc.Management.Hosted.HuntGroup.Models.RoutingMethod>] [-TimeoutAction <Microsoft.Rtc.Management.Hosted.HuntGroup.Models.TimeoutAction>] [-TimeoutActionTarget <System.Uri>] [-TimeoutThreshold <Int16>] [-UseDefaultMusicOnHold <System.Boolean>]
 [-WelcomeMusicFileContent <System.Byte[]>] [-WelcomeMusicFileName <System.String>] [<CommonParameters>]
```

## DESCRIPTION
Creates a new Call Queue in your Skype for Business Online organization. Call Queues are part of Phone System in Office 365.

Note, you need to specify UseDefaultMusicOnHold $True (default is none), or provide MusicOnHoldFileName and MusicOnHoldFileContent. 

MusicOnHoldFileName and MusicOnHoldFileContent cannot be empty so you must specify a valid MusicOnHoldFileName and MusicOnHoldFileContent or set UseDefaultMusicOnHold to true.

The New-CsHuntGroup cmdlet may suggest additional steps required to complete the call queue setup.

The following parameters are not applicable to Skype for Business Online: AsJob, ClientAudience, DomainController, Force, HuntGroupServiceCallbackUri, PipelineVariable, and Ring.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
New-CsHuntGroup -Name "Help Desk" -Domain "litwareinc.com" -UseDefaultMusicOnHold $true
```

This example creates a call queue for the organization named "Help Desk" in the domain "litwareinc.com" using default music on hold.

### -------------------------- Example 2 -------------------------- 
```
$musicOnHoldContent = Get-Content ".\MusicOnHold.wav" -ReadCount 0 -Encoding Byte
$welcomeMusicContent = Get-Content ".\WelcomeMusic.wav" -ReadCount 0 -Encoding Byte
New-CsHuntGroup -Name "Help desk" -Domain "litwareinc.com" -LineUri "tel:+19998881234" -RoutingMethod Attendant -DistributionLists @("8521b0e3-51bd-4a4b-a8d6-b219a77a0a6a", "868dccd8-d723-4b4f-8d74-ab59e207c357") -AllowOptOut $false -AgentAlertTime 30 -OverflowThreshold 15 -OverflowAction Forward -OverflowActionTarget "sip:backup_user@litwareinc.com" -TimeoutThreshold 30 -TimeoutAction Disconnect -MusicOnHoldFileName "MusicOnHold.wav" -MusicOnHoldFileContent $musicOnHoldContent -WelcomeMusicFileName "WelcomeMusic.wav"
```

This example saves the contents of music on hold and welcome music files in temporary variables. Then, it creates a call queue for the organization named "Help Desk" in the domain "litwareinc.com" using those contents and other configurable parameters.


## PARAMETERS

### -Domain
The Domain parameter denotes the domain part of the primary uri for the call queue. This domain name is validated against the list of domains that the tenant owns.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the call queue.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentAlertTime
The AgentAlertTime parameter represents the time (in seconds) that a call can remain unanswered before it is automatically routed to the next agent. The AgentAlertTime can be set to any integer value between 30 and 180 seconds (3 minutes), inclusive. The default value is 30 seconds.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 30
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOptOut
The AllowOptOut parameter indicates whether or not agents can opt in or opt out from taking calls from a call queue.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionLists
The DistributionLists parameter lets you add all the members of the distribution lists to the call queue. This is a list of distribution list GUIDs. A service wide configurable maximum number of DLs per call queue are allowed. Only the first N (service wide configurable) agents from all distribution lists combined are considered for accepting the call. Nested DLs are supported. O365 Groups can also be used to add members to the call queue.

```yaml
Type: System.Collections
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineUri
The LineUri parameter is the phone number for the call queue. The line Uniform Resource Identifier (URI) must be specified by using the following format: the tel: prefix followed by a plus sign, followed by the country/region calling code, area code, and phone number (using only digits: no blank spaces, periods, or hyphens). For example: -LineUri "tel:+14255551219".

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MusicOnHoldFileContent
The MusicOnHoldFileContent parameter represents music to play when callers are placed on hold. This is the content of the audio file. Supported formats are: .wav, .mp3, and .wma. This parameter is required if the UseDefaultMusicOnHold parameter is not specified.

```yaml
Type: System.Byte[]
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MusicOnHoldFileName
The MusicOnHoldFileName parameter represents music to play when callers are placed on hold. This is the name of the audio file. Supported formats are: .wav, .mp3, and .wma. This parameter is required if the UseDefaultMusicOnHold parameter is not specified.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowAction
The OverflowAction parameter designates the action to take if the overflow threshold is reached. The OverflowAction property must be set to one of the following three values: DisconnectWithBusy, Forward, and Voicemail.

PARAMVALUE: DisconnectWithBusy | Forward | Voicemail

```yaml
Type: Microsoft.Rtc.Management.Hosted.HuntGroup.Models.OverflowAction
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: DisconnectWithBusy
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowActionTarget
The OverflowActionTarget parameter represents the target of the overflow action. If the OverFlowAction is set to Forward, this parameter must be set to a SIP address. Otherwise, this parameter is optional.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowThreshold
The OverflowThreshold parameter defines the number of calls that can be in the queue at any one time before the overflow action is triggered. The OverflowThreshold can be any integer value between 0 and 200, inclusive. A value of 0 causes calls not to reach agents and the overflow action to be taken immediately

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 50
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingMethod
The RoutingMethod defines how agents will be called in a call queue. If the routing method is set to Serial, then agents will be called one at a time. If the routing method is set to Attendant, then agents will be called in parallel.

PARAMVALUE: Attendant | Serial

```yaml
Type: Microsoft.Rtc.Management.Hosted.HuntGroup.Models.RoutingMethod
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Attendant
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutAction
The TimeoutAction parameter defines the action to take if the timeout threshold is reached. The TimeoutAction property must be set to one of the following three values: Disconnect, Forward, and Voicemail. The default value is Disconnect.

PARAMVALUE: Disconnect | Forward | Voicemail

```yaml
Type: Microsoft.Rtc.Management.Hosted.HuntGroup.Models.TimeoutAction
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Disconnect
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutActionTarget
The TimeoutActionTarget represents the target of the timeout action. If the TimeoutAction is set to Forward, this parameter might be set to a SIP address. Otherwise, this field is optional.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutThreshold
The TimeoutThreshold parameter defines the time (in seconds) that a call can be in the queue before that call times out. At that point, the system will take the action specified by the TimeoutAction parameter. 
The TimeoutAction can be any integer value between 0 and 2700 seconds (inclusive), and is rounded to the nearest 15th interval. For example, if set to 47 seconds, then it is rounded down to 45. If set to 0, welcome music is played, and then the timeout action will be taken.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 1200
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultMusicOnHold
The UseDefaultMusicOnHold parameter indicates that this call queue uses the default music on hold. This parameter cannot be specified together with MusicOnHoldFileName and MusicOnHoldFileContent.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WelcomeMusicFileContent
The WelcomeMusicFileContent parameter represents the audio file to play when callers are connected with the call queue. This is the content of the audio file. Supported formats are: .wav, .mp3, .and wma.

```yaml
Type: System.Byte[]
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WelcomeMusicFileName
The WelcomeMusicFileName parameter represents audio file to play when callers are connected with the call queue. This is the name to the audio file. Supported formats are: .wav, .mp3, and .wma.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
This parameter is reserved for Microsoft internal use only.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAudience
This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for Microsoft internal use only.

PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This parameter is reserved for Microsoft internal use only.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HuntGroupServiceCallbackUri
This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ring
This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for Microsoft internal use only.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.HuntGroup.Models.HuntGroup

## NOTES

## RELATED LINKS
[Create a Phone System call queue](https://support.office.com/en-us/article/Create-a-Phone-System-call-queue-67ccda94-1210-43fb-a25b-7b9785f8a061)
