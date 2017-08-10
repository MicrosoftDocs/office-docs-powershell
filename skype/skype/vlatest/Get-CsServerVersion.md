---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsServerVersion

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

{{Fill in the Synopsis}}

**Below Content Applies To:** Lync Server 2013

Returns server licensing information for a computer running Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns server licensing information for a computer running Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsServerVersion [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

{{Fill in the Description}}

**Below Content Applies To:** Lync Server 2013

Lync Server comes in two different versions: an evaluation version (which will eventually expire) and a fully-licensed version.
The Get-CsServerVersion cmdlet provides a way for administrators to determine which version of Lync Server is running on a computer.
Get-CsServerVersion, which is designed to run only on the local computer and which has no additional parameters, attempts to read the registry value HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Real-Time Communications\{A593FD00-64F1-4288-A6F4-E699ED9DCA35}\Type.
Based on that registry value, the cmdlet will then report back the version number of the software and the Lync Server licensing information.
That licensing information will tell you one of the following:

That the evaluation license key has been installed.

That the volume license key has been installed.

That no license key is required for the components installed on the local computer.
(Licensing is required only for computers functioning as a Front End Server, a Director, or an Edge Server.)

If an error occurs, Get-CsServerVersion will report that the license type and version information could not be retrieved, and recommend that you reinstall the Lync Server components.

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 comes in two different versions: an evaluation version (which will eventually expire) and a fully-licensed version.
The Get-CsServerVersion cmdlet provides a way for administrators to determine which version of Skype for Business Server 2015 is running on a computer.
The Get-CsServerVersion cmdlet, which is designed to run only on the local computer and which has no additional parameters, attempts to read the registry value HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Real-Time Communications\{A593FD00-64F1-4288-A6F4-E699ED9DCA35}\Type.
Based on that registry value, the cmdlet will then report back the version number of the software and the Skype for Business Server 2015 licensing information.
That licensing information will tell you one of the following:

That the evaluation license key has been installed.

That the volume license key has been installed.

That no license key is required for the components installed on the local computer.
(Licensing is required only for computers functioning as a Front End Server, a Director, or an Edge Server.)

If an error occurs, the Get-CsServerVersion cmdlet will report that the license type and version information could not be retrieved, and recommend that you reinstall the Skype for Business Server 2015 components.

Note that Get-CsServerVersion returns only the base version number.
For example, Get-CsServerVersion will return a value such as 5.0.8308 even if an update has officially changed the version number to 5.0.8308.291.
If you need a very specific version number then you should use the Windows Control Panel.



## EXAMPLES

### Example 1 (Lync Server 2010)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns licensing information for the local computer.
This is the only way that Get-CsServerVersion can be used.

Get-CsServerVersion

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns licensing information for the local computer.
This is the only way that the Get-CsServerVersion cmdlet can be used.

Get-CsServerVersion

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

###  
None.
Get-CsServerVersion does not support pipelined input.

###  
None.
The Get-CsServerVersion cmdlet does not support pipelined input.

## OUTPUTS

### System.Object

###  
Get-CsServerVersion returns a string value.

###  
The Get-CsServerVersion cmdlet returns a string value.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/66af07c0-fdfe-491a-ad48-b8821fb58904(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/66af07c0-fdfe-491a-ad48-b8821fb58904(OCS.16).aspx)

