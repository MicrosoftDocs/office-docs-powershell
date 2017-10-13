---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Debug-CsLisConfiguration
schema: 2.0.0
---

# Debug-CsLisConfiguration

## SYNOPSIS
Displays the Enhanced 9-1-1 (E9-1-1) Location Information service (LIS) configuration in XML format.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Debug-CsLisConfiguration [-Force] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The LIS configuration for an Enterprise Voice E9-1-1 implementation is stored in compressed format.
This cmdlet un-compresses the configuration and displays it in XML format.
This can make it quicker to debug issues with a configuration.

This cmdlet retrieves the location information from the Central Management store.
When this information is created, it is stored in the location database; it does not move to the Central Management store until it is published with the Publish-CsLisConfiguration cmdlet.
If the location information has not been published (or has been un-published with the Unpublish-CsLisConfiguration cmdlet), the Debug-CsLisConfiguration cmdlet will not return anything.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Debug-CsLisConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Debug-CsLisConfiguration"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Debug-CsLisConfiguration | Format-Table -Wrap
```

Running this command will display the entire LIS configuration to the Skype for Business Server Management Shell window in XML format.
By default, the output of the Debug-CsLisConfiguration cmdlet is displayed on one line, with an ellipsis (…) at the end of the line indicating that there's more than one line of data.
Therefore, in this example we pipe the output to the Format-Table cmdlet, specifying the Wrap parameter, to display the full output wrapped to fit in the display window.


## PARAMETERS

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Management.Automation.PSCustomObject

## NOTES

## RELATED LINKS

[Publish-CsLisConfiguration](Publish-CsLisConfiguration.md)

[Unpublish-CsLisConfiguration](Unpublish-CsLisConfiguration.md)

[Import-CsLisConfiguration](Import-CsLisConfiguration.md)

[Export-CsLisConfiguration](Export-CsLisConfiguration.md)

[Test-CsLisConfiguration](Test-CsLisConfiguration.md)
