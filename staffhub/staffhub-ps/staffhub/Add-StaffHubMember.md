---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version: 
schema: 2.0.0
---

# Add-StaffHubMember

## SYNOPSIS
Note: This cmdlet currently is in Beta.
Adds a member or manager to the specified team

## SYNTAX

```
Add-StaffHubMember [-TeamId] <String> [-FirstName] <String> [-LastName] <String> [[-Email] <String>]
 [[-PhoneNumber] <String>] [-IsManager] <Boolean>
```

## DESCRIPTION
Adds a member or manager to the specified team

## EXAMPLES

### Example 1
```
Add-StaffHubMember -TeamId "TEAM_1234" -FirstName "Abc" -LastName "123" -Email "abc@contoso.com" -IsManager $false
```

Adds the member with specified email/PhoneNumber to the team. Either PhoneNumber/Email is mandatory

## PARAMETERS

### -Email
Office 365 email of the member to be added

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstName
First name of the member to be added

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsManager
Should the person be added as a manager.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: True
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastName
Last name of the member to be added

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumber
Phone number of the member to be added

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
ID of the team to which the member is to be added

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

