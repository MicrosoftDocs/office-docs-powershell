---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Debug-CsLisConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Displays the Enhanced 9-1-1 (E9-1-1) Location Information service (LIS) configuration in XML format.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Displays the Enhanced 9-1-1 (E9-1-1) Location Information service (LIS) configuration in XML format.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Debug-CsLisConfiguration [-Force] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

The LIS configuration for an Enterprise Voice E9-1-1 implementation is stored in compressed format.
This cmdlet un-compresses the configuration and displays it in XML format.
This can make it quicker to debug issues with a configuration.

This cmdlet retrieves the location information from the Central Management store.
When this information is created, it is stored in the location database; it does not move to the Central Management store until it is published with the Publish-CsLisConfiguration cmdlet.
If the location information has not been published (or has been un-published with the Unpublish-CsLisConfiguration cmdlet), Debug-CsLisConfiguration will not return anything.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Debug-CsLisConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Debug-CsLisConfiguration"}

Below Content Applies To: Skype for Business Server 2015

The LIS configuration for an Enterprise Voice E9-1-1 implementation is stored in compressed format.
This cmdlet un-compresses the configuration and displays it in XML format.
This can make it quicker to debug issues with a configuration.

This cmdlet retrieves the location information from the Central Management store.
When this information is created, it is stored in the location database; it does not move to the Central Management store until it is published with the Publish-CsLisConfiguration cmdlet.
If the location information has not been published (or has been un-published with the Unpublish-CsLisConfiguration cmdlet), the Debug-CsLisConfiguration cmdlet will not return anything.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Debug-CsLisConfiguration | Format-Table -Wrap
```

Running this command will display the entire LIS configuration to the Lync Server Management Shell window in XML format.
By default, the output of Debug-CsLisConfiguration is displayed on one line, with an ellipsis (…) at the end of the line indicating that there's more than one line of data.
Therefore, in this example we pipe the output to the Format-Table cmdlet, specifying the Wrap parameter, to display the full output wrapped to fit in the display window.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Running this command will display the entire LIS configuration to the Lync Server Management Shell window in XML format.
By default, the output of Debug-CsLisConfiguration is displayed on one line, with an ellipsis (…) at the end of the line indicating that there's more than one line of data.
Therefore, in this example we pipe the output to the Format-Table cmdlet, specifying the Wrap parameter, to display the full output wrapped to fit in the display window.

Debug-CsLisConfiguration | Format-Table -Wrap

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Running this command will display the entire LIS configuration to the Lync Server Management Shell window in XML format.
By default, the output of the Debug-CsLisConfiguration cmdlet is displayed on one line, with an ellipsis (…) at the end of the line indicating that there's more than one line of data.
Therefore, in this example we pipe the output to the Format-Table cmdlet, specifying the Wrap parameter, to display the full output wrapped to fit in the display window.

Debug-CsLisConfiguration | Format-Table -Wrap

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

###  
None.

## OUTPUTS

###  
Returns an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8cc718d6-52ec-4ff3-a77e-8d6df1725fb0(OCS.14).aspx)

[Publish-CsLisConfiguration]()

[Unpublish-CsLisConfiguration]()

[Import-CsLisConfiguration]()

[Export-CsLisConfiguration]()

[Test-CsLisConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/8cc718d6-52ec-4ff3-a77e-8d6df1725fb0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8cc718d6-52ec-4ff3-a77e-8d6df1725fb0(OCS.16).aspx)

