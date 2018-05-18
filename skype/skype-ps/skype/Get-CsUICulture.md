---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsUICulture
schema: 2.0.0
---

# Get-CsUICulture

## SYNOPSIS
Returns information about the culture (that is, the language and regional settings) used by the Skype for Business Server Management Shell.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsUICulture [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
Although Skype for Business Server is available in multiple languages, the software is not a true MUI (multilingual user interface) application.
Among other things, this means that the user interface for the Skype for Business Server does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Skype for Business Server and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Skype for Business Server Management Shell will not automatically follow suit; instead, the Skype for Business Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Skype for Business Server Management Shell, you must run the Set-CsUICulture cmdlet.

The Get-CsUICulture cmdlet provides a way for you to determine the culture currently used in the Skype for Business Server Management Shell.



## EXAMPLES

### -------------------------- Example ------------------------
```
Get-CsUICulture
```

The command shown in Example 1 returns basic information about the culture currently in use by the Skype for Business Server Management Shell.

## PARAMETERS

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The Get-CsUICulture cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsUICulture cmdlet returns instances of the System.Globalization.CultureInfo class.

## NOTES

## RELATED LINKS

[Set-CsUICulture](Set-CsUICulture.md)

