---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPProcessAccount

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPProcessAccount [-AssignmentCollection <SPAssignmentCollection>] [-LocalService]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPProcessAccount [-AssignmentCollection <SPAssignmentCollection>] [-LocalSystem]
```

### UNNAMED_PARAMETER_SET_3
```
Get-SPProcessAccount [-AssignmentCollection <SPAssignmentCollection>] [-NetworkService]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPProcessAccount cmdlet returns a system account or a managed account and creates the SPProcessAccountPipeBind object.
All operations that can accept an account can accept the SPProcessAccountPipeBind in place of the SPManagedAccountPipeBind.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPProcessAccount -NetworkService
```

This example creates the SPProcessAccountPipeBind type by using the NetworkService account.

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPProcessAccount -NetworkService
```

This example creates the SPProcessAccountPipeBind type by using the NetworkService account.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPProcessAccount -NetworkService | New-SPServiceApplicationPool -Account $_
```

This example creates an SPServiceApplicationPool account by using the NetworkService account returned by the Get-SPProcessAccount cmdlet.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPProcessAccount -NetworkService | New-SPServiceApplicationPool -Account $_
```

This example creates an SPServiceApplicationPool account by using the NetworkService account returned by the Get-SPProcessAccount cmdlet.

## PARAMETERS

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

### -LocalService
Returns the LocalService account.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalSystem
Returns the LocalSystem account.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkService
Returns the NetworkService account.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

