---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPBrowserCustomerExperienceImprovementProgram

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Turns on or off the browser Customer Experience Improvement Program.



## SYNTAX

### Farm
```
Set-SPBrowserCustomerExperienceImprovementProgram [-Farm] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Enable] [-WhatIf] [<CommonParameters>]
```

### SiteSubscription
```
Set-SPBrowserCustomerExperienceImprovementProgram -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Enable] [-WhatIf] [<CommonParameters>]
```

### WebApplication
```
Set-SPBrowserCustomerExperienceImprovementProgram -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Enable] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Set-SPBrowserCustomerExperienceImprovementProgram cmdlet turns on or off the browser Customer Experience Improvement Program for collecting software quality metrics.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPBrowserCustomerExperienceImprovementProgram -Farm -Enable
```

This example turns on the browser Customer Experience Improvement Program for the farm.

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPBrowserCustomerExperienceImprovementProgram -Farm -Enable
```

This example turns on the browser Customer Experience Improvement Program for the farm.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPBrowserCustomerExperienceImprovementProgram -Farm -Enable:$False
```

This example turns off the browser Customer Experience Improvement Program for the farm.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPBrowserCustomerExperienceImprovementProgram -Farm -Enable:$False
```

This example turns off the browser Customer Experience Improvement Program for the farm.

### ------------------EXAMPLE 3----------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPWebApplication http://MyOfficeApp1 | Get- SPBrowserCustomerExperienceImprovementProgram -Enable
```

This example turns on the browser Customer Experience Improvement Program for the Web application, MyOfficeApp1.

### ------------------EXAMPLE 3----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPWebApplication http://MyOfficeApp1 | Get- SPBrowserCustomerExperienceImprovementProgram -Enable
```

This example turns on the browser Customer Experience Improvement Program for the Web application, MyOfficeApp1.

## PARAMETERS

### -Farm
```yaml
Type: SwitchParameter
Parameter Sets: Farm
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscription
Sets the Customer Experience Improvement Program opt-in state for the specified site subscription.

The type must be a valid URL, in the form http://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a site subscription (for example, SiteSubscription1); or an instance of a valid SiteSubscription object.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: SiteSubscription
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Sets the Customer Experience Improvement Program opt-in state for the specified SharePoint Web application.

The type must be a valid URL, in the form http://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
Turns on the browser Customer Experience Improvement Program.
The default value is True.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

