---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Export-UMPrompt
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Export-UMPrompt

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Export-UMPrompt cmdlet to export an audio file being used as a greeting prompt for Unified Messaging (UM) dial plans and auto attendants.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Export-UMPrompt [-AfterHoursWelcomeGreeting] -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-TestBusinessName <String>] [-WhatIf] [-ExportAsWav <$true | $false>]
 [<CommonParameters>]
```

### Set4
```
Export-UMPrompt [-AfterHoursWelcomeGreetingAndMenu] -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-TestMenuKeyMapping <CustomMenuKeyMapping[]>] [-WhatIf]
 [-ExportAsWav <$true | $false>] [<CommonParameters>]
```

### Set2
```
Export-UMPrompt [-BusinessHours] -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [-ExportAsWav <$true | $false>] [<CommonParameters>]
```

### Set1
```
Export-UMPrompt [-BusinessHoursWelcomeGreeting] -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-TestBusinessName <String>] [-WhatIf] [-ExportAsWav <$true | $false>]
 [<CommonParameters>]
```

### Set7
```
Export-UMPrompt [-BusinessHoursWelcomeGreetingAndMenu] -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-TestMenuKeyMapping <CustomMenuKeyMapping[]>] [-WhatIf] -PromptFileName <String>
 [-ExportAsWav <$true | $false>] [<CommonParameters>]
```

### Set6
```
Export-UMPrompt [-BusinessLocation] -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [-ExportAsWav <$true | $false>] [<CommonParameters>]
```

### Set5
```
Export-UMPrompt -PromptFileName <String> -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [-ExportAsWav <$true | $false>] [<CommonParameters>]
```

### Set8
```
Export-UMPrompt -PromptFileName <String> -UMDialPlan <UMDialPlanIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [-ExportAsWav <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
The Export-UMPrompt cmdlet exports prompts that belong to existing UM dial plan and UM auto attendant objects. After the Export-UMPrompt cmdlet exports a prompt, you can save a copy of the prompt to a local drive as an audio file. You can then play the audio file using a media player.

After this task is completed, the UM prompts are displayed or saved.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$prompt = Export-UMPrompt -PromptFileName "customgreeting.mp3" -UMDialPlan MyUMDialPlan; Set-Content -Path "d:\DialPlanPrompts\welcomegreeting.mp3" -Value $prompt.AudioData -Encoding Byte
```

This example exports the welcome greeting for the UM dial plan MyUMDialPlan and saves it as the file welcomegreeting.mp3.

### -------------------------- Example 2 --------------------------
```
Export-UMPrompt -PromptFileName "welcomegreeting.mp3" -UMAutoAttendant MyUMAutoAttendant; Set-Content -Path "e:\UMPromptsBackup\welcomegreetingbackup.mp3" -Value $prompt.AudioData -Encoding Byte
```

This example exports a custom greeting for the UM auto attendant MyUMAutoAttendant and saves it to the file welcomegreetingbackup.mp3.

### -------------------------- Example 3 --------------------------
```
Export-UMPrompt -AfterHoursWelcomeGreeting -UMAutoAttendant MyUMAutoAttendant -TestBusinessName "Northwind Traders"; set-content -Path "d:\ AfterHoursWelcomeGreeting.mp3" -Value $prompt.AudioData -Encoding Byte
```

In Exchange Server 2010, this example exports the after hours welcome greeting for the UM auto attendant MyUMAutoAttendant, saves it as the file AfterHoursWelcomeGreeting.mp3 and uses Northwind Traders as the test business name.

## PARAMETERS

### -AfterHoursWelcomeGreeting
The AfterHoursWelcomeGreeting parameter specifies the system generated, after hours welcome greeting for the UM auto attendant specified.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AfterHoursWelcomeGreetingAndMenu
The AfterHoursWelcomeGreetingAndMenu parameter specifies the system- generated after hours welcome greeting and menu prompts for the UM auto attendant specified.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHours
The BusinessHours parameter specifies that the prompt to be returned is the business hours prompt of the auto attendant.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursWelcomeGreeting
The BusinessHoursWelcomeGreeting parameter specifies the system-generated business hours welcome greeting for the UM auto attendant specified.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursWelcomeGreetingAndMenu
The BusinessHoursWelcomeGreetingAndMenu parameter specifies the system-generated business hours welcome greeting and menu prompts for the UM auto attendant specified.

```yaml
Type: SwitchParameter
Parameter Sets: Set7
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessLocation
The BusinessLocation parameter specifies the business location greeting played for callers when the caller calls into a UM auto attendant and specifies the business location.

```yaml
Type: SwitchParameter
Parameter Sets: Set6
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PromptFileName
The PromptFileName parameter specifies the name of the custom prompt to export.

```yaml
Type: String
Parameter Sets: Set7, Set5, Set8
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMAutoAttendant
The UMAutoAttendant parameter specifies the UM auto attendant ID. This parameter specifies the directory object identifier for the UM auto attendant.

```yaml
Type: UMAutoAttendantIdParameter
Parameter Sets: Set3, Set4, Set2, Set1, Set7, Set6, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan
The UMDialPlan parameter specifies the UM dial plan ID. This parameter specifies the directory object identifier for the UM dial plan.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: Set8
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestBusinessName
This parameter is available or functional only in Exchange Server 2010.

The TestBusinessName parameter specifies whether the business name configured on a UM auto attendant or the business name specified by this parameter is used to generate the welcome greeting prompt.

```yaml
Type: String
Parameter Sets: Set3, Set1
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestMenuKeyMapping
This parameter is available or functional only in Exchange Server 2010.

The TestMenuKeyMapping parameter specifies whether the existing key mappings configured on a UM auto attendant or the key mapping menu specified by this parameter is used to generate the welcome greeting and menu.

```yaml
Type: CustomMenuKeyMapping[]
Parameter Sets: Set4, Set7
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExportAsWav
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/4bf35665-1643-4fec-bdb5-3aa27ff9984f.aspx)
