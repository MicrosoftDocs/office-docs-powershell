---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPBrowserCustomerExperienceImprovementProgram

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPBrowserCustomerExperienceImprovementProgram [-Farm] [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPBrowserCustomerExperienceImprovementProgram -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_3
```
Get-SPBrowserCustomerExperienceImprovementProgram -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPBrowserCustomerExperienceImprovementProgram cmdlet reads the current opt-in state for the browser Customer Experience Improvement Program.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPBrowserCustomerExperienceImprovementProgram -WebApplication http://WebAppexample1
```

This example returns the current Customer Experience Improvement Program opt-in state for the Web application, WebAppexample1.

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPBrowserCustomerExperienceImprovementProgram -WebApplication http://WebAppexample1
```

This example returns the current Customer Experience Improvement Program opt-in state for the Web application, WebAppexample1.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSiteSubscription http://SiteSubscription1 | Get- SPBrowserCustomerExperienceImprovementProgram
```

The following example returns the Customer Experience Improvement Program opt-in state for the site subscription, SiteSubscription1.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSiteSubscription http://SiteSubscription1 | Get- SPBrowserCustomerExperienceImprovementProgram
```

The following example returns the Customer Experience Improvement Program opt-in state for the site subscription, SiteSubscription1.

## PARAMETERS

### -Farm
Specifies that the opt-in state for the farm is returned by this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscription
Returns the opt-in state for the specified site subscription.

The type must be a valid URL, in the form http://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a site subscription (for example, SiteSubscription1); or an instance of a valid SiteSubscription object.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Returns the opt-in state for the specified SharePoint Web application.

The type must be a valid URL, in the form http://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

