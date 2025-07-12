---
title: "Exchange cmdlet syntax"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 07/11/2025
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.localizationpriority: medium
ms.assetid: 85ffe9c8-7f03-4877-8e55-3cbd40228d84
description: "Learn about the structure and syntax of cmdlets in Exchange PowerShell, Exchange Online PowerShell, Security & Compliance PowerShell, and Exchange Online Protection PowerShell for cloud protection of on-premises email environments."
---

# Exchange cmdlet syntax

Exchange cmdlet reference articles use a standardized method that describes key aspects about the cmdlet. For example:

- Parameters available on the cmdlet.
- Values that each parameter accepts.
- Parameters that can be used together, and parameters that need to be used separately.

This article explains these conventions, and also the syntax required to run commands in Exchange PowerShell.

## Command conventions in Exchange PowerShell

Exchange PowerShell help follows conventions to indicate required or optional information, and how to enter parameters and values when you run a command. These command conventions are described in the following list:

- `-`: A hyphen indicates a parameter. For example, `-Identity`.
- `< >`: Angle brackets indicate the possible values for a parameter. For example, `-Location <ServerName>` or `-Enabled <$true | $false>`.
- `[ ]`: Square brackets indicate optional parameters and their values. For example, `[-WhatIf]` or `[-ResultSize <Unlimited>]`.
  - Parameter-value pairs not enclosed in square brackets are required. For example, `-Password <SecureString>`.
  - Square brackets around the parameter name itself indicates a _positional_ parameter where you can use the parameter value without specifying the parameter name. Positional parameters are required or optional. For example:
    - `Get-Mailbox [[-Identity] <MailboxIdParameter>]` means the _Identity_ parameter is:
      - Positional because the parameter enclosed in square brackets.
      - Optional because the whole parameter-value pair is enclosed in square brackets.
      - So, you can use `Get-Mailbox -Identity <MailboxIdParameter>` or `Get-Mailbox <MailboxIdParameter>`.
    - `Set-Mailbox [-Identity] <MailboxIdParameter>` means the _Identity_ parameter is:
      - Positional because the parameter is enclosed in square brackets.
      - Required because the whole parameter-value pair isn't enclosed in square brackets.
      - So, you can use `Set-Mailbox -Identity <MailboxIdParameter>` or `Set-Mailbox <MailboxIdParameter>`.
- `|`: Pipe symbols in parameter values indicate a choice between values. For example, `-Enabled <$true | $false>` indicates the _Enabled_ parameter can have the value `$true` or `$false`.

These command conventions help you understand how a command is constructed. Except for the hyphen that indicates a parameter, you don't use these symbols as they're described in the table when you run cmdlets in Exchange PowerShell.

## Parameter sets in Exchange PowerShell

Parameter sets are groups of parameters that can be used with each other in the same command. Each parameter set contains at least one parameter that isn't available in the other parameter sets, but parameter sets typically share some parameters.s.

Many cmdlets have only one parameter set, which means that all parameters can be used with each other. Other cmdlets have several parameter sets, which means some parameters can't be used with other parameters. For example, suppose the following parameter sets are available on the **New-SystemMessage** cmdlet:

`New-SystemMessage -DsnCode <EnhancedStatusCode> -Internal <Boolean> -Language <CultureInfo> -Text <String> [-Confirm] [-DomainController <Fqdn>] [-WhatIf] <CommonParameters>`

`New-SystemMessage -QuotaMessageType <QuotaMessageType> -Language <CultureInfo> -Text <String> [-Confirm] [-DomainController <Fqdn>] [-WhatIf] <CommonParameters>`

The following parameters are available in the first parameter set, so you can use them in the same command:

- _DsnCode_
- _Internal_
- _Language_
- _Text_
- _Confirm_
- _DomainController_
- _WhatIf_

The following parameters are available in the second parameter set, so you can use them in the same command:

- _QuotaMessageType_
- _Language_
- _Text_
- _Confirm_
- _DomainController_
- _WhatIf_

The parameters _DsnCode_ and _Internal_ are available only in the first parameter set. The parameter _QuotaMessageType_ is available only in the second parameter set. So, you can't use the following parameters in the same command:

- _DsnCode_ and _QuotaMessageType_.
- _Internal_ and _QuotaMessageType_.

The following parameters are available in both parameter sets, so you can use them in any **New-SystemMessage** command:

- _Language_
- _Text_
- _Confirm_
- _DomainController_
- _WhatIf_

The `<CommonParameters>` entry indicates the cmdlet supports the basic Windows PowerShell parameters that are available on virtually any cmdlet (for example, _Verbose_). You can use common parameters with parameters from any parameter set. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## Quotation marks in Exchange PowerShell

In Exchange PowerShell, you use single quotation marks ( ' ) or double quotation marks ( " ) to enclose parameter values that contain spaces. For example, the following commands behave the same:

- `Get-ReceiveConnector -Identity "Contoso Receive Connector"`

- `Get-ReceiveConnector -Identity 'Contoso Receive Connector'`

In the previous examples, if you don't enclose the value in single or double quotation marks, the command fails because PowerShell treats each word as a new argument (it thinks `Contoso` is the value of the _Identity_ parameter, and `Receive` is the value of an unspecified positional parameter). In this example, the error looks like this:

> A positional parameter cannot be found that accepts argument 'Receive'

For plain text values, single quotation marks vs. double quotation marks don't really matter. But, the choice is important when variables are involved:

- **Double quotation marks**: Variables are substituted with their actual values.
- **Single quotation marks**: Variables are treated literally.

For example, `$Server = Mailbox01` results in the following output based on which quotation marks you use:

- **"$Server Example"** results in `Mailbox01 Example`.
- **'$Server Example'** results in `$Server Example`.

For more information about variables, see [about_Variables](/powershell/module/microsoft.powershell.core/about/about_variables) and [about_Automatic_Variables](/powershell/module/microsoft.powershell.core/about/about_automatic_variables).

## Escape characters in Exchange PowerShell

In any programming language, an _escape character_ is used to identify special characters literally, and not by their normal function in that language. In Exchange PowerShell, when you enclose a text string in double quotation marks, the escape character is the back quotation mark escape character ( ` ).

For example, if you want the output `The price is $23`, enter the value **"The price is \`$23"**. The escape character is required on the dollar sign character ( $ ) because $ defines variables in PowerShell.

If you enclose the string in single quotation marks, the only special character you need to worry about is the single quotation mark character itself, which requires two single quotation marks to escape ( `''` ).

 For example, if you want the output `Don't confuse two single quotation marks with a double quotation mark!`, enter the value **'Don''t confuse two single quotation marks with a double quotation mark!'**.

## Command operators in Exchange PowerShell

The following list shows the valid operators you can use in an Exchange command. Some of these symbols were also described in the earlier [Command conventions in Exchange PowerShell](#command-conventions-in-exchange-powershell) section. However, these symbols have different meanings when used as operators. For example, the minus sign that indicates a parameter can also be used as a mathematical operator.

- `=`: The equal sign is an assignment character. The value on the right side of the equal sign is assigned to the variable on the left side. For example, `$x = Get-Mailbox`. You can also use other characters with the equal sign:
  - `+=`: Add the value on the right side of the equal sign to the current value in the variable on the left side.
  - `-=`: Subtract the value on the right side of the equal sign from the current in the variable on the left side.
  - `*=`: Multiply the current value of the variable on the left side of the equal sign by the value specified on the right side.
  - `/=`: Divide the current value of the variable on the left side of the equal sign by the value specified on the right side.
  - `%=`: Modify the current value of the variable on the left side of the equal sign by the value specified on the right side.
- `:`: Use a colon to separate a parameter name from the parameter value. For example, `-Enabled:$True`.
  - A colon separator works and is optional on virtually all parameter-value pairs.
  - A colon separator is required on switch parameters. For more information about switch parameters, see [about_Parameters](/powershell/module/microsoft.powershell.core/about/about_parameters).
- `!`: The exclamation point is the logical NOT operator. The combined pair `!=` means "not equal to."
- `[ ]`: Brackets specify the index value of an array position. Index values are offsets that always start at zero. For example, in the array named `$Red`, the value of the tenth position in the array is `$Red[9]`.

  Brackets can also assign a type to a variable. For example, to identify the variable named `$A` as XML, use `$A=[XML] "<Test><A>value</A></Test>"`. The following variable types are available: `Array`, `Bool`, `Byte`, `Char`, `Char[]`, `Decimal`, `Double`, `Float`, `Int`, `Int[]`, `Long`, `Long[]`, `RegEx`, `Single`, `ScriptBlock`, `String`, `Type`, and `XML.`
- `{ }`: Use braces to include an expression in a command. For example, `Get-Process | Where {$_.HandleCount -gt 400}`.
- `|`: Use the pipe symbol to pipe the output of one command to another command. For example, `Get-Mailbox -Server SRV1 | Set-Mailbox -ProhibitSendQuota 2GB`.
- `>`: Use the right-angle bracket to send the output of a command to a file. If the file already exists, the contents are overwritten. For example, `Get-TransportRule > "C:\My Documents\TransportRules.txt"`.
- `>>`: Use double right-angle brackets to append the output of a command to an existing file. If the file doesn't exist, a new file is created. For example, `Get-TransportRule >> "C:\My Documents\TransportRules.txt"`.
- `"`: Use double quotation marks to enclose text strings that contain spaces. As previously described, variables are replaced with their actual values.
- `$`: The dollar sign indicates a variable. For example, to create a variable named `$Blue` with the value 10, use `$Blue = 10`. After you store the variable, you can use it as a parameter value.
- `@`: The at symbol references an associative array. For more information, see [about_Arrays](/powershell/module/microsoft.powershell.core/about/about_arrays).
- `$( )`: A dollar sign with parentheses indicates command substitution. You can use command substitution when you want to use the output of one command as an argument in another command. For example, `Get-ChildItem $(Read-Host -Prompt "Enter FileName: ")`.
- `..`: Double-periods indicate a value range. For example, if an array contains several indexes, you can return the values of all indexes between the second and fifth indexes by running the command: `$Blue[2..5]`.
- `+`: The plus sign operator adds two values together. For example, `6 + 6` equals `12`.
- `-`: The minus sign operator subtracts one value from another value (for example, `12 - 6` equals `6`) or indicates a negative number (for example, `-6 * 6` equals `-36`).
- `*`: You can use an asterisk for the following tasks:
  - **Match strings**: For example, `Get-User | Where-Object {$_.Department -like 'Sales*'})`.
  - **Multiply numeric values**: For example, `6 * 6` equals `36`.
  - **Repeat the string value a specified number of times**: For example, `"Test" * 3` equals `TestTestTest`.
- `/`: A forward slash divides one value by another. For example, `6 / 6` equals `1`.
- `%`: The percent sign has the following uses:
  - In a numerical evaluation, it returns the remainder from a division operator. For example, `6 % 4` equals `2`.
  - In a [pipeline](/powershell/module/microsoft.powershell.core/about/about_pipelines), it's shorthand for the **ForEach-Object** cmdlet. For example, `Import-Csv C:\MyFile.csv | ForEach-Object {Set-Mailbox $_.Identity -Name $_.Name}` is the same as `Import-Csv C:\MyFile.csv | % {Set-Mailbox $_.Identity -Name $_.Name}`.
  - `?`: The question mark is shorthand for the **Where-Object** cmdlet. For example, `Get-Alias | Where-Object {$_.Definition -eq "Clear-Host"}` is the same as `Get-Alias | ? {$_.Definition -eq "Clear-Host"}`.|
