---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version:
schema: 2.0.0
---

# Remove-StaffHubUser

## SYNOPSIS
Note: This cmdlet is currently in Beta.
Removes the specified user from StaffHub (Only for users deleted in AAD already)

## SYNTAX

```
Remove-StaffHubUser [-UserId] <String>
```

## DESCRIPTION
Removes the specified user from StaffHub.
Pre-requisite is to delete the user from AAD. 

## EXAMPLES

### Example 1
```
Remove-StaffHubUser -UserId "USER_1234"
```

This removes the user "USER_1234" from StaffHub, if the user has been deleted in AAD already.

## PARAMETERS

### -UserId
UserId of the user to be removed from StaffHub

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
