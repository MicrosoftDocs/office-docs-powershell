---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsUICulture

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the culture (that is, the language and regional settings) used by the Lync Server Management Shell.

Below Content Applies To: Lync Server 2013

Returns information about the culture (that is, the language and regional settings) used by the Lync Server Management Shell.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about the culture (that is, the language and regional settings) used by the Skype for Business Server Management Shell.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsUICulture [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Although Microsoft Lync Server 2010 is available in multiple languages, the software is not a true MUI (multilingual user interface) application.
Among other things, this means that the user interface for the Lync Server Management Shell does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Lync Server 2010 and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Lync Server Management Shell will not automatically follow suit; instead, the Lync Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Lync Server Management Shell, you must run the Set-CsUICulture cmdlet.

The Get-CsUICulture cmdlet provides a way for you to determine the culture currently used in the Lync Server Management Shell.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUICulture cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.

Below Content Applies To: Lync Server 2013

Although Lync Server is available in multiple languages, the software is not a true MUI (multilingual user interface) application.
Among other things, this means that the user interface for the Lync Server Management Shell does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Lync Server and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Lync Server Management Shell will not automatically follow suit; instead, the Lync Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Lync Server Management Shell, you must run the Set-CsUICulture cmdlet.

The Get-CsUICulture cmdlet provides a way for you to determine the culture currently used in the Lync Server Management Shell.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUICulture cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.

Below Content Applies To: Skype for Business Server 2015

Although Skype for Business Server 2015 is available in multiple languages, the software is not a true MUI (multilingual user interface) application.
Among other things, this means that the user interface for the Skype for Business Server 2015 does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Skype for Business Server 2015 and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Skype for Business Server Management Shell will not automatically follow suit; instead, the Skype for Business Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Skype for Business Server Management Shell, you must run the Set-CsUICulture cmdlet.

The Get-CsUICulture cmdlet provides a way for you to determine the culture currently used in the Skype for Business Server Management Shell.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsUICulture
```

The command shown in Example 1 returns basic information about the culture currently in use by the Lync Server Management Shell.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns basic information about the culture currently in use by the Lync Server Management Shell.

Get-CsUICulture

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns basic information about the culture currently in use by the Skype for Business Server Management Shell.

Get-CsUICulture

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
Get-CsUICulture does not accept pipelined input.

###  
None.
The Get-CsUICulture cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsUICulture returns instances of the System.Globalization.CultureInfo class.

###  
The Get-CsUICulture cmdlet returns instances of the System.Globalization.CultureInfo class.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b8df7083-068b-4d5e-a9b4-448602de6586(OCS.14).aspx)

[Set-CsUICulture]()

[Online Version](http://technet.microsoft.com/EN-US/library/b8df7083-068b-4d5e-a9b4-448602de6586(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b8df7083-068b-4d5e-a9b4-448602de6586(OCS.16).aspx)

