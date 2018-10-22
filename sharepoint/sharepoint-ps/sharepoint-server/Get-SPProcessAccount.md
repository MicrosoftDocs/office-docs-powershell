---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPProcessAccount
schema: 2.0.0
---

# Get-SPProcessAccount

## SYNOPSIS

Returns a system account or a managed account.



## SYNTAX

### LocalService
```
Get-SPProcessAccount [-AssignmentCollection <SPAssignmentCollection>] [-LocalService] [<CommonParameters>]
```

### LocalSystem
```
Get-SPProcessAccount [-AssignmentCollection <SPAssignmentCollection>] [-LocalSystem] [<CommonParameters>]
```

### NetworkService
```
Get-SPProcessAccount [-AssignmentCollection <SPAssignmentCollection>] [-NetworkService] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPProcessAccount cmdlet returns a system account or a managed account and creates the SPProcessAccountPipeBind object.
All operations that can accept an account can accept the SPProcessAccountPipeBind in place of the SPManagedAccountPipeBind.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- 
```
PS C:\>Get-SPProcessAccount -NetworkService
```

This example creates the SPProcessAccountPipeBind type by using the NetworkService account.

### ------------------EXAMPLE 2----------------------- 
```
PS C:\>Get-SPProcessAccount -NetworkService | New-SPServiceApplicationPool -Account $_
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Parameter Sets: LocalService
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalSystem
Returns the LocalSystem account.

```yaml
Type: SwitchParameter
Parameter Sets: LocalSystem
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkService
Returns the NetworkService account.

```yaml
Type: SwitchParameter
Parameter Sets: NetworkService
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

