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
New-CsHuntGroup [-Domain <Object>] [-Name <Object>] [-AgentAlertTime <Object>] [-AllowOptOut <Object>]
 [-BypassDualWrite <Object>] [-ClientAudience <Object>] [-DistributionLists <Object>]
 [-DomainController <Object>] [-Force] [-HuntGroupServiceCallbackUri <Object>] [-LineUri <Object>]
 [-MusicOnHoldFileContent <Object>] [-MusicOnHoldFileName <Object>] [-OverflowAction <Object>]
 [-OverflowActionTarget <Object>] [-OverflowThreshold <Object>] [-Ring <Object>] [-RoutingMethod <Object>] 
 [-Tenant <Object>] [-TimeoutAction <Object>] [-TimeoutActionTarget <Object>] [-TimeoutThreshold <Object>]
 [-UseDefaultMusicOnHold <Object>] [-WelcomeMusicFileContent <Object>] [-WelcomeMusicFileName <Object>]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Creates new Call Queue in your Skype for Business Online organization. Call Queues are part of Phone System in Office 365.

Note, you need to specify UseDefaultMusicOnHold $True (default is none), or provide MusicOnHoldFileName and MusicOnHoldFileContent. 

MusicOnHoldFileName and MusicOnHoldFileContent cannot be empty so you must specify a valid MusicOnHoldFileName and MusicOnHoldFileContent or set UseDefaultMusicOnHold to true.

If you are a hybrid tenant, you may need to execute additional cmdlets on your on-premise deployments. The New-CsHuntGroup will request further steps, if those steps are necessary for you.

The following parameters are not applicable to Skype for Business Online: AsJob, ClientAudience, DomainController, Force, HuntGroupServiceCallbackUri, PipelineVariable, and Ring.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
New-CsHuntGroup -Name "Help Desk" -Domain "litwareinc.com" -UseDefaultMusicOnHold $true
```

This example creates a call queue for the organization named "Help Desk" in the domain "litwareinc.com" using default music on hold.

### -------------------------- Example 2 -------------------------- 
```
$musicOnHoldContent = Get-Content ".\MusicOnHold.wav" -ReadCount 0 -Encoding Byte
$welcomeMusicContent = Get-Content ".\WelcomeMusic.wav" -ReadCount 0 -Encoding Byte
New-CsHuntGroup -Name "Help desk" -Domain "litwareinc.com" -LineUri "tel:+19998881234" -RoutingMethod Attendant -DistributionLists @("8521b0e3-51bd-4a4b-a8d6-b219a77a0a6a", "868dccd8-d723-4b4f-8d74-ab59e207c357") -AllowOptOut $false -AgentAlertTime 30 -OverflowThreshold 15 -OverflowAction Forward -OverflowActionTarget "sip:backup_user@litwareinc.com" -TimeoutThreshold 30 -TimeoutAction Disconnect -MusicOnHoldFileName "MusicOnHold.wav" -MusicOnHoldFileContent $musicOnHoldContent -WelcomeMusicFileName "WelcomeMusic.wav"
```

This example saves the contents of music on hold and welcome music files in temporary variables. Then, it creates a call queue for the organization named "Help Desk" in the domain "litwareinc.com" using those contents and other configurable parameters.


## PARAMETERS

### -Domain
PARAMVALUE: String

```yaml
Type: Object
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
PARAMVALUE: String

```yaml
Type: Object
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
PARAMVALUE: Int16

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOptOut
PARAMVALUE: $true | $false

```yaml
Type: Object
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
PARAMVALUE: $true | $false

```yaml
Type: Object
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
PARAMVALUE: String

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionLists
PARAMVALUE: List

```yaml
Type: Object
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
PARAMVALUE: SwitchParameter

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
PARAMVALUE: Uri

```yaml
Type: Object
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
PARAMVALUE: Uri

```yaml
Type: Object
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
PARAMVALUE: Byte\[\]

```yaml
Type: Object
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
PARAMVALUE: String

```yaml
Type: Object
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
PARAMVALUE: DisconnectWithBusy | Forward | Voicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowActionTarget
PARAMVALUE: Uri

```yaml
Type: Object
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
PARAMVALUE: Int16

```yaml
Type: Object
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
PARAMVALUE: String

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingMethod
PARAMVALUE: Attendant | Serial

```yaml
Type: Object
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
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutAction
PARAMVALUE: Disconnect | Forward | Voicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutActionTarget
PARAMVALUE: Uri

```yaml
Type: Object
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
PARAMVALUE: Int16

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultMusicOnHold
PARAMVALUE: $true | $false

```yaml
Type: Object
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
PARAMVALUE: Byte\[\]

```yaml
Type: Object
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
PARAMVALUE: String

```yaml
Type: Object
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
PARAMVALUE: SwitchParameter

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Create a Phone System call queue](https://support.office.com/en-us/article/Create-a-Phone-System-call-queue-67ccda94-1210-43fb-a25b-7b9785f8a061)
