---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/export-umprompt
schema: 2.0.0
title: Export-UMPrompt
---

# Export-UMPrompt

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Export-UMPrompt cmdlet to export an audio file being used as a greeting prompt for Unified Messaging (UM) dial plans and auto attendants.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AACustomGreeting
```
Export-UMPrompt -PromptFileName <String> -UMAutoAttendant <UMAutoAttendantIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### DPCustomGreeting
```
Export-UMPrompt -PromptFileName <String> -UMDialPlan <UMDialPlanIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Export-UMPrompt cmdlet exports prompts that belong to existing UM dial plan and UM auto attendant objects. After the Export-UMPrompt cmdlet exports a prompt, you can save a copy of the prompt to a local drive as an audio file. You can then play the audio file using a media player.

After this task is completed, the UM prompts are displayed or saved.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$prompt = Export-UMPrompt -PromptFileName "customgreeting.mp3" -UMDialPlan MyUMDialPlan

[System.IO.File]::WriteAllBytes('D:\DialPlanPrompts\welcomegreeting.mp3', $prompt.AudioData)
```

This example exports the welcome greeting for the UM dial plan MyUMDialPlan and saves it as the file welcomegreeting.mp3.

### Example 2
```powershell
$prompt = Export-UMPrompt -PromptFileName "welcomegreeting.mp3" -UMAutoAttendant MyUMAutoAttendant

[System.IO.File]::WriteAllBytes('E:\UMPromptsBackup\welcomegreetingbackup.mp3', $prompt.AudioData)
```

This example exports a custom greeting for the UM auto attendant MyUMAutoAttendant and saves it to the file welcomegreetingbackup.mp3.

## PARAMETERS

### -PromptFileName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PromptFileName parameter specifies the name of the custom prompt to export.

```yaml
Type: String
Parameter Sets: AACustomGreeting, DPCustomGreeting
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMAutoAttendant

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMAutoAttendant parameter specifies the UM auto attendant ID. This parameter specifies the directory object identifier for the UM auto attendant.

```yaml
Type: UMAutoAttendantIdParameter
Parameter Sets: AACustomGreeting
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMDialPlan parameter specifies the UM dial plan ID. This parameter specifies the directory object identifier for the UM dial plan.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: DPCustomGreeting
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
