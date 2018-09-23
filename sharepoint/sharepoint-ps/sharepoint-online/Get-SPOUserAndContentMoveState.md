---
external help file: 
applicable: SharePoint Online
title: Get-SPOUserAndContentMoveState
schema: 2.0.0
---

# Get-SPOUserAndContentMoveState

## SYNOPSIS
The Get-SPOUserAndContentMoveState cmdlet is part of the OneDrive and SharePoint Multi-Geo cmdlets, and allows a SharePoint administrators to check the status of a user or site move across geo locations.

## SYNTAX
To obtain the status of a particular user move, you may use the following cmdlet
```Powershell
Get-SPOUserAndContentMoveState -UserPrincipalName <String> [<CommonParameters>]
```

### MoveReport
Allows you to define the direction of the user move in relation to your current SharePoint location. The sintax is as follows:
```
Get-SPOUserAndContentMoveState [-Limit <UInt32>] [-MoveDirection <Direction>] [-MoveEndTime <DateTime>]
 [-MoveStartTime <DateTime>] [-MoveState <State>] [<CommonParameters>]
```

### OdbMoveId
To obtain the move state by OneDrive Move Job ID, you may use the following cmdlet:
```Powershell
Get-SPOUserAndContentMoveState -OdbMoveId <Guid> [<CommonParameters>]
```

### UserPrincipalName
```Powershell
Get-SPOUserAndContentMoveState -UserPrincipalName <String> [<CommonParameters>]
```

## DESCRIPTION
This command gets the information and the status of a move request of a user between sites in a SharePoint Online Multi Geo tenant.

The following are the available move states:

|Status	|Description|
| --- | --- |
|NotStarted|	The move has not started. |
|InProgress| 	The move is in progress in one of the following states: Validation (1/4), Backup (2/4), Restore (3/4), Cleanup (4/4).|
|Success|	The move has completed successfully.|
|Failed	|The move failed.|



### EXAMPLES

### Example 1 
To obtain the move state by OneDrive Move Job ID, you may use the following cmdlet:
```Powershell
Get-SPOUserAndContentMoveState -OdbMoveId b298219e-3440-10b8-8931-46e805e2b85b
```
   
### Example 2
To obtain which moves are in a particular state you may use
```Powershell
Get-SPOUserAndContentMoveState -movestate NotStarted
```

###Example 3
```Powershell
Get-SPOUserAndContentMoveState -MoveDirection All 
```
Gives you the output for users moving in and out from the geo location you are logged into

###Example 4
```Powershell
Get-SPOUserAndContentMoveState -MoveDirection In 
```
Gives you the output for users moving into the geo location that you are logged into

###Example 5
```Powershell
Get-SPOUserAndContentMoveState -MoveDirection Out 
```
Gives you the output for users moving out from the geo location that you are logged into

###Example 6
```Powershell
Get-SPOUserAndContentMoveState -UserPrincipalName jezz@contoso.com
```
Obtains the status of the move for jezz@contoso.com

## PARAMETERS

### -Limit
Get the limit of user on a single call of the parameter

```yaml
Type: UInt32
Parameter Sets: MoveReport
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveDirection
Allows you to define the direction of the user move in relation to your current SharePoint location

```yaml
Type: Direction
Parameter Sets: MoveReport
Aliases: 
Accepted values: All, MoveIn, MoveOut
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveEndTime
Allows you to obtain the moves that are scheduled to end by a particular time, as defined in UTC

```yaml
Type: DateTime
Parameter Sets: MoveReport
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveStartTime
Allows you to obtain the moves that are scheduled to begin at a particular time, as defined in UTC



```yaml
Type: DateTime
Parameter Sets: MoveReport
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveState
Move State status.

```yaml
Type: State
Parameter Sets: MoveReport
Aliases: 
Accepted values: All, NotStarted, Scheduled, InProgress, Stopped, Success, Failed
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OdbMoveId
{{Fill OdbMoveId Description}}

```yaml
Type: Guid
Parameter Sets: OdbMoveId
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
User Principal name is the unique property on Azure AD for each user.

```yaml
Type: String
Parameter Sets: UserPrincipalName
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Start-SPOUserAndContentMovee](Start-SPOUserAndContentMove.md)